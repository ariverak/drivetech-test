import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Favorite } from '@material-ui/icons'
import Lightbox from 'react-image-lightbox';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
		'& img': {
            width: 'auto',
            height: 300,
            maxHeight: 300,
            padding: '15px 0',
            margin: 10,
            cursor: 'pointer',
            '&:hover': {
                filter: 'brightness(1.1)'
            },
            [theme.breakpoints.down('xs')]: {
                height: 'auto',
                maxWidth: 'calc(100vw - 20px)'
            }
        }
    },
    imagesContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    infoCard: {
        zIndex: 3000,
        position: 'absolute',
        bottom: 25,
        left: '10%',
        minWidth: 275
    },
    likes: {
        height: 50,
        '& svg': {
            color: 'red',
            marginRight: 10
        }
    }
}))

function Results({ photos, nextPage, scrollPosition }){
    const classes = useStyles()
    const [ isOpen, setIsOpen ] = useState(false)
    const [ photoIndex, setPhotoIndex ] = useState(0)

    useEffect(()=>{
        let next = typeof photos[photoIndex + 1] !== 'undefined';
        if(!next) return setPhotoIndex(0)
        setPhotoIndex(photoIndex + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[photos])

    const onImageClick = (index) => {
        setPhotoIndex(index)
        setIsOpen(true)
    }

    async function onNextPhoto(){
        if(photoIndex === (photos.length - 1)){
            await nextPage()
        }else{
            setPhotoIndex((photoIndex + 1) % photos.length)
        }
    }

	return (
        <div className={classes.root}>
            {photos && (
                <div className={classes.imagesContainer}>
                    {
                        photos.map((photo,i)=>(
                            <LazyLoadImage
                                onClick={()=>onImageClick(i)}
                                key={photo.id}
                                effect="blur"
                                alt={photo.alt_description}
                                scrollPosition={scrollPosition}
                                src={photo.urls.small}
                            />
                        ))
                    }
                </div>
            )}
            {isOpen && (
                <Lightbox
                    mainSrc={photos[photoIndex].urls.regular}
                    nextSrc={photos[(photoIndex + 1) % photos.length].urls.regular}
                    prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].urls.regular}
                    onCloseRequest={() => setIsOpen(false)}
                    imageTitle={
                        <Grid className={classes.likes} container alignItems="center">
                            <Favorite />
                            <Typography variant="h5">
                                {photos[photoIndex].likes}
                            </Typography>
                        </Grid>
                    }
                    clickOutsideToClose={false}
                    imageCaption={photos[photoIndex].alt_description}
                    onMovePrevRequest={() => 
                        setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
                    }
                    onMoveNextRequest={onNextPhoto}
                />
            )}
        </div>
	)
}

export default trackWindowScroll(Results)