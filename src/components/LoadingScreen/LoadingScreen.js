import { Container, CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const LoadingScreen = () => {
    return (
        <Box  sx={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh',
                width: '100%',
                backgroundColor: '#fff',
            }
        }>
            <CircularProgress/>
        </Box>
    )
}

export default LoadingScreen
