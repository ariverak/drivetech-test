import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
            [theme.breakpoints.down('xs')]: {
                height: 'auto',
                maxWidth: 'calc(100vw - 20px)'
            }
        }
	}
}))

function Results({ photos, scrollPosition }){
    const classes = useStyles()
	return (
        <div className={classes.root}>
            {
                photos.results.map(photo=>(
                    <LazyLoadImage
                        key={photo.id}
                        effect="blur"
                        alt={photo.alt_description}
                        scrollPosition={scrollPosition}
                        src={photo.urls.small}
                    />
                ))
            }
        </div>
	)
}

export default trackWindowScroll(Results)