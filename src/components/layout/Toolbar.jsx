import React from 'react';
import { 
	AppBar,
	Toolbar as MuiToolbar,
	Typography,
	Switch
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	toolbar: {
		justifyContent: 'space-between',
		'& h1': {
			fontWeight: 'bold',
			fontSize: 18
		}
	},
	switchContainer: {
		display: 'flex',
		alignItems: 'center'
	}
}))

export default function Toolbar(){
    const classes = useStyles();
    return (
        <AppBar>
            <MuiToolbar className={classes.toolbar}>
                <Typography variant="overline" component="h1">
                    Coding Test
                </Typography>
                <div className={classes.switchContainer}>
                    <Typography variant="caption">
                        DARK
                    </Typography>
                    <Switch name="gilad" />
                    <Typography variant="caption">
                        LIGHT
                    </Typography>
                </div>
            </MuiToolbar>
        </AppBar>
    )
}