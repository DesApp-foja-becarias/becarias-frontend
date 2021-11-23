import { useContext } from 'react'
import { Typography, CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { LoadingScreenContext } from '../../context/LoadingScreenContext'

export const LoadingScreen = () => {
    const { loadingText } = useContext(LoadingScreenContext)
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
            <Box sx={
                { 
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
            <CircularProgress/>
            <Typography mt={2} sx={{
                fontSize: '1.25rem',
                fontWeight: 'normal',
                color: '#666',
            }}
            >
            {loadingText ? loadingText: 'Por Favor Espere...'}
            </Typography>
            </Box>
        </Box>
    )
}

export default LoadingScreen
