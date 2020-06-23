import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

// import darkTheme from './dark';
// import lightTheme from './light';

export default function Theme({ children }){

    const theme = createMuiTheme({
        palette: {
            type: "dark"
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}