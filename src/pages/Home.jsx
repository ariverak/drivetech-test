import React, { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getPhotos, getMorePhotos } from 'store/actions/photos';
import { useDebounce } from 'use-debounce';
import SearchBar from 'material-ui-search-bar'
import Layout from 'components/layout'
import Results from 'components/home/Results'

const useStyles = makeStyles(theme => ({
	search: {
		width: '100%',
		maxWidth: 720,
		margin: '25px 0',
		[theme.breakpoints.down('xs')]: {
			maxWidth: 300
		}
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
	const [ currentPage, setCurrentPage ] = useState(1)
	const { photos } = useSelector(state => state.photos)
	const [ searchText, setSearchText ] = useState('')

	const [ searchTextDebounsed ] = useDebounce(searchText, 1500);

	useEffect(()=>{
		if(searchTextDebounsed){
			dispatch(getPhotos(searchTextDebounsed))
		}
	},[ dispatch, searchTextDebounsed ])

	useEffect(()=>{
		if(currentPage !== 1){
			dispatch(getMorePhotos(searchTextDebounsed, currentPage))
		}
	},[ dispatch, searchTextDebounsed, currentPage ])


	return (
		<Layout>
			<div className={classes.content}>
				<Grid container direction="column" alignItems="center" className={classes.root}>
					<SearchBar
						value={searchText}
						placeholder="Buscar"
						onChange={setSearchText}
						className={classes.search}
						onCancelSearch={()=>setSearchText('')}
					/>
					<Results photos={photos} />
					<button onClick={()=>setCurrentPage(currentPage + 1)}>Fetch more</button>
				</Grid>
			</div>
		</Layout>
	)
}