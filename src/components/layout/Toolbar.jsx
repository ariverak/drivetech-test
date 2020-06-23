import React, { useMemo } from 'react';
import { 
	AppBar,
	Toolbar as MuiToolbar,
	Typography,
	Switch
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { 
    WbSunnyOutlined as SunnyIcon,
    Brightness3Outlined as BrightnessIcon
} from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleThemeMode } from 'store/actions/ui'

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: 500
    },
	toolbar: {
		justifyContent: 'space-between',
		'& h1': {
			fontWeight: 'bold',
			fontSize: 18
        },
        '& svg': {
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
    const { ui } = useSelector(state=>state.ui);
    const dispatch = useDispatch();
    const isDark = useMemo(()=>ui.mode === 'dark',[ui.mode])

    function switchMode(){
        dispatch(toggleThemeMode())
    }

    return (
        <AppBar className={classes.appBar}>
            <MuiToolbar className={classes.toolbar}>
                <Typography variant="overline" component="h1">
                    Coding Test
                </Typography>
                <div className={classes.switchContainer}>
                    <SunnyIcon />
                    <Switch checked={isDark} onChange={switchMode} />
                    <BrightnessIcon />
                </div>
            </MuiToolbar>
        </AppBar>
    )
}