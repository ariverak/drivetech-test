import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getPhotos, getMorePhotos, resetPhotos } from 'store/actions/photos';
import { useDebounce } from 'use-debounce';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import SearchBar from 'material-ui-search-bar'
import Layout from 'components/layout'
import Results from 'components/home/Results'

const useStyles = makeStyles(theme => ({
	search: {
		width: '100%',
		maxWidth: 720,
		margin: '25px 0',
		[theme.breakpoints.down('sm')]: {
			maxWidth: 460
		},
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
	const [ isLoading, setIsLoading ] = useState(false)
	const [ currentPage, setCurrentPage ] = useState(1)
	const photos = useSelector(state => state.photos.results)
	const [ searchText, setSearchText ] = useState('')

	const [ searchTextDebounsed ] = useDebounce(searchText, 1000);

	useBottomScrollListener(()=>{
        nextPage()
    });

	useEffect(()=>{
		async function fetchPhotos(){
			if(searchTextDebounsed){
				setIsLoading(true)
				await dispatch(getPhotos(searchTextDebounsed))
				setIsLoading(false)
			}
		}
		if(photos.length && !searchTextDebounsed){
			dispatch(resetPhotos())
		}
		fetchPhotos()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[ dispatch, searchTextDebounsed ])

	const nextPage = () => {
		return new Promise(async resolve => {
			setCurrentPage(currentPage + 1)
			await dispatch(getMorePhotos(searchTextDebounsed, currentPage + 1))
			resolve()
		})
	}

	return (
		<Layout loading={isLoading}>
			<div className={classes.content}>
				<Grid container direction="column" alignItems="center" className={classes.root}>
					<SearchBar
						value={searchText}
						placeholder="Buscar"
						onChange={setSearchText}
						className={classes.search}
						onCancelSearch={()=>setSearchText('')}
					/>
					<Results 
						photos={photos}
						nextPage={nextPage}
					/>
				</Grid>
			</div>
		</Layout>
	)
}