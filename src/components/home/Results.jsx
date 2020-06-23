import React from 'react'

export default function Results({ photos }){
	return (
        <>
            {
                photos.results.map(photo=>(
                    <img 
                        width="100"
                        height="100"
                        key={photo.id}
                        src={photo.urls.regular}
                        alt=""
                    />
                ))
            }
        </>
	)
}