import { Box, Chip } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({

selectedMailContainer: {
	display: 'flex',
	margin: "1rem 0",
	maxHeight: "7rem",
	overflowY:"scroll",
	'&::-webkit-scrollbar': {
		width: '0.5rem',
	height: '0.5rem',
	background: '#cccccc',
	borderRadius: '0.5rem',
	}
},
}))

function SelectedUsersDashboard({selectedUsers}) {
	const classes = useStyles()
	return (
		<Box className={classes.selectedMailContainer}>
			<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
			{selectedUsers.map((value) => (
					<Chip key={value.id} label={value.email} />
			))}
			</Box>
	
		</Box>
	)
}

export default SelectedUsersDashboard