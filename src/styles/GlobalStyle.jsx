import React from "react";
import { GlobalStyles } from '@mui/material'; 

const GlobalStylesCom = () => (
    <GlobalStyles 
        styles = {{
            '.fade-exit': {
                opacity: 1,
            },
            '.fade-exit-active': {
                opacity: 0,
                transition: 'opacity 0.5s ease-out'
            }
        }}
    />
);

export default GlobalStylesCom