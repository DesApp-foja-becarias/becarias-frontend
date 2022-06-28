import React from 'react';
import { TableContainer,Table,TableHead,TableRow,TableCell, TableBody,Paper, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Dato from '../Datos/Dato';
import { DateTime } from 'luxon';

const DisplayCarreers = ({careers}) => {
	console.log(careers)
    return (
			<Paper style={{padding:'1em'}}>
				{careers.length > 0?
					careers.map((career,index) => 
						<CarreerDisplay key={index} career={career}/>
					)
					:
					<Container>
						<Typography variant='subtitle1'>
								No esta cursando en ninguna carrera
						</Typography>
					</Container>
			}

			</Paper>
    );
}

const CarreerDisplay = ({career}) => {
	return (
		<Paper style={{margin:'1em', padding:'0.2em'}}>
			<Container>
				<Typography variant='h4'>
					{career.carrera.carrera}
				</Typography>
				<Container>
					<Accordion style={{marginBottom:'0.2em'}}>
						<AccordionSummary
          					expandIcon={<ExpandMoreIcon />}
          					aria-controls="panel1a-content"
          					id="panel1a-header"
        				>
							<Typography variant='h5'>Ultimo periodo cursado</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant='subtitle2' color='green'> {career.lastPeriod.nombre}</Typography>
							<TableContainer>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell sx={{fontWeight:'bold'}}>Materia</TableCell>
											<TableCell sx={{fontWeight:'bold'}}>Carga Horaria Total</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{career.lastPeriod.materias.map((materia,index) =>
											<TableRow key={index}>
												<TableCell>{materia.nombre}</TableCell>
												<TableCell>{materia.cargaHorariaTotal}</TableCell>
											</TableRow>
										)}
									</TableBody>
								</Table>
							</TableContainer>
						</AccordionDetails>
					</Accordion>
				</Container>
				<Container>
					<Accordion>
						<AccordionSummary
          					expandIcon={<ExpandMoreIcon />}
          					aria-controls="panel1a-content"
          					id="panel1a-header"
        				>
							<Typography variant='h5'> Historial de materias </Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant='h6' > Materias Aprobadas </Typography>
							<TableContainer>
							<Table size='small'>
								{career.materiasAprobadas.length > 0 ?
								<>
								<TableHead>
									<TableRow>
										<TableCell sx={{fontWeight:'bold'}}>Materia</TableCell>
										<TableCell sx={{fontWeight:'bold'}}>Fecha</TableCell>
										<TableCell sx={{fontWeight:'bold'}}>Nota</TableCell>
										<TableCell sx={{fontWeight:'bold'}}>Condicion</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{career.materiasAprobadas.map((materia,index) =>
										<TableRow key={index}>
											<TableCell width={300}>{materia.materia}</TableCell>
											<TableCell >{DateTime.fromISO(materia.fecha).toFormat('dd/MM/yyyy') }</TableCell>
											<TableCell >{materia.nota}</TableCell>
											<TableCell >{materia.condicion}</TableCell>
										</TableRow>
									)}
								</TableBody>
								</>
								:
								<TableHead>
									<TableRow>
									<TableCell>No registra materias aprobadas</TableCell>
									</TableRow>
								</TableHead>
								}
								</Table>
							</TableContainer>
							<Typography variant='h6' style={{marginTop:'1em'}}> Materias Regularizadas </Typography>
							<TableContainer sx={{marginBottom:'2em'}}>
							<Table size='small'>
								{career.materiasRegularizadas.length > 0 ?
								<>
								<TableHead>
									<TableRow>
										<TableCell sx={{fontWeight:'bold'}}>Materia</TableCell>
										<TableCell sx={{fontWeight:'bold'}}>Nota</TableCell>
										<TableCell sx={{fontWeight:'bold'}}>Periodo</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{career.materiasRegularizadas.map((materia,index) =>
										<TableRow key={index}>
											<TableCell width={300}>{materia.materia}</TableCell>
											<TableCell >{materia.nota}</TableCell>
											<TableCell >{materia.periodo.nombre.toLowerCase()}</TableCell>
										</TableRow>
									)}
								</TableBody>
								</>
								:
								<TableHead>
									<TableRow>
									<TableCell>No registra materias regularizadas</TableCell>
									</TableRow>
								</TableHead>
								}
								</Table>
							</TableContainer>
						</AccordionDetails>
					</Accordion>
				</Container>
			</Container>
		</Paper>
	)
}

export default DisplayCarreers;