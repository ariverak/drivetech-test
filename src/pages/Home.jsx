import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
	Grid,
	Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getAllPhotos } from 'store/actions/photos.actions';
import SearchBar from 'material-ui-search-bar'
import Layout from 'components/layout'
import Results from 'components/home/Results'

const useStyles = makeStyles(theme => ({
	search: {
		width: '100%',
		maxWidth: 720,
		margin: '25px 0'
	},
	content: {
		marginTop: 64,
		[theme.breakpoints.down('sm')]: {
			marginTop: 56
		}
	}
}))


export default function Home(){
	const dispatch = useDispatch();
	const classes = useStyles();
	const { photos } = useSelector(state => state.photos)
	const [ searchText, setSearchText ] = useState('')

	useEffect(()=>{
		console.log(photos,searchText)
	},[ photos, searchText ])

	return (
		<Layout>
			<Container className={classes.content}>
				<Grid container direction="column" alignItems="center" className={classes.root}>
					<SearchBar
						value={searchText}
						onChange={setSearchText}
						className={classes.search}
						// onRequestSearch={() => doSomethingWith(this.state.value)}
					/>
					<button onClick={()=>dispatch(getAllPhotos('cats'))}>Fetch</button>
					<Results photos={photos} />
				</Grid>
			</Container>
		</Layout>
	)
}