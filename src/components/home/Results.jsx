import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Lightbox from 'react-image-lightbox';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';


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
            [theme.breakpoints.down('xs')]: {
                height: 'auto',
                maxWidth: 'calc(100vw - 20px)'
            }
        }
    },
    lightboxContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
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
                <div className={classes.lightboxContainer}>
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