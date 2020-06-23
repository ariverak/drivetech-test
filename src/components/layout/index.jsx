import React from 'react';
import Toolbar from './Toolbar'

export default function Layout({ children }){
    return (
        <>
            <Toolbar />
            {children}
        </>
    )
}