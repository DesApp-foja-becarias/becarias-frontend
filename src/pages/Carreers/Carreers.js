import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { getCarreers } from '../../services/carrers/carreersService'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Carreers = () => {
	const [carreers, setCarreers] = useState([])
	useEffect(()=>{
		const fetchData = async () => {
		await getCarreers().then(res => {
			setCarreers(res.data)
		}
		)
		}
		fetchData()
	
	}, [])
	return (
		<div>
			<Typography variant="h3" color='primary'>Carreras del departamento de Ingenieria</Typography>
			<Table>
				<TableBody>
					
						{carreers.map(carreer => (
							<Row carrera={carreer} materias={carreer.materias}/>
						))}
					
				</TableBody>
			</Table>
			</div>

	)
}

function Row({carrera, materias }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {
					carrera.nombre
					}
        </TableCell>
				
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Materias
              </Typography>
              <Table>
                <TableHead>
									<TableRow>
                    <TableCell style={{fontWeight:'bold'}}>ID</TableCell>
                    <TableCell style={{fontWeight:'bold'}}>Nombre</TableCell>
										<TableCell style={{fontWeight:'bold'}}>Codigo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {materias.map((materia) => (
                    <TableRow key={materia.id}>
											<TableCell>{materia.id}</TableCell>
                      <TableCell component="th" scope="row">
                        {materia.nombre}
                      </TableCell>
                      <TableCell>{materia.codigo}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default Carreers