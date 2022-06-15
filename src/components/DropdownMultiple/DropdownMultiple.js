import { Chip, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getCarreers } from '../../services/carrers/carreersService'

const DropdownMultiple = ({update,signedCarreers}) => {
	const [carreras, setCarreras] = useState([])
	
	useEffect(() => {
		const fetchData = async () => {
			const carreras = await getCarreers()
			setCarreras(carreras.data)
		}
		fetchData()
	}, [])

	return (
		<div>
		<InputLabel htmlFor='carreer'>Carrera/s</InputLabel>
                        <Select
                            multiple
                            name="carreer"
                            value={signedCarreers}
                            renderValue={selected =>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value.nombre} />
                                ))}
                                </Box>}
                            onChange={e =>update(e)}
                            placeholder="Carrera/s"
                            sx={{minWidth: '13em' , marginTop:'1em'}}
                        >
                            
                            {carreras.map(car => (
                                <MenuItem key={car.id} value={car}>
                                    {car.nombre}
                                </MenuItem>
                            ))}
                        </Select>
		</div>
	)
}

export default DropdownMultiple