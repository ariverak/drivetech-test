import React,{ useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
// import darkTheme from './dark';
// import lightTheme from './light';

export default function AppTheme({ children }){

    const mode = useSelector(state=>state.ui.mode);

    const theme = useMemo(()=>createMuiTheme({
        palette: mode === 'light' ? {
            type: "light",
            primary: {
                main: '#4a148c'
            },
            secondary: {
                main: '#00695c'
            }
        } : {
            type: "dark",
            primary: {
                main: '#212121'
            },
            secondary: {
                main: '#d84315'
            }
        }
    }),[mode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}