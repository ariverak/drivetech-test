import React from 'react';
import Toolbar from './Toolbar'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ClipLoader from "react-spinners/ClipLoader";

const useStyles = makeStyles(theme => ({
    loading: {
        zIndex: 9999,
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
}))

export default function Layout({ children, loading }){
    const classes = useStyles()
    return (
        <>
            <Toolbar />
            {children}
            {loading && (
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    className={classes.loading}
                >
                    <ClipLoader
                        size={150}
                        color={"#123abc"}
                        loading={true}
                    />
                </Grid>
            )}
        </>
    )
}