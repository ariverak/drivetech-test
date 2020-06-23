import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch,co} from 'react-redux'
import { getAllPhotos } from 'store/actions/photos.actions';

export default function Home(){
	const dispatch = useDispatch();
	const { photos } = useSelector(state => state.photos)

	useEffect(()=>{
		console.log(photos)
	},[photos])

	return (
		<div>
			<button onClick={()=>dispatch(getAllPhotos('cats'))}>Fetch</button>
			{photos.results.map(photo=>(
				<img 
					width="100"
					height="100"
					key={photo.id}
					src={photo.urls.regular}
					alt=""
				/>
			))}
		</div>
	)
}