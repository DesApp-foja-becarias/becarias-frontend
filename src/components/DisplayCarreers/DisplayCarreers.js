import React from 'react';
import { TableContainer,Table,TableHead,TableRow,TableCell, TableBody,Paper, Container, Typography, Divider } from '@mui/material';
import Dato from '../Datos/Dato';

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
					<Dato title='Ultimo Periodo Cursado' value={career.lastPeriod.nombre}/>
					<Typography variant='h6' style={{marginTop:'1em'}}> Materias cursadas en el ultimo periodo correspondiente </Typography>
					<TableContainer>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Materia</TableCell>
									<TableCell>Carga Horaria Total</TableCell>
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
				</Container>
				<Container>
					<Typography variant='h5' style={{marginTop:'1em'}}> Historial </Typography>
					<Typography variant='h6' style={{marginTop:'1em'}}> Materias Aprobadas </Typography>
					<TableContainer>
						<Table size='small'>
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
										<TableCell >{materia.fecha}</TableCell>
										<TableCell >{materia.nota}</TableCell>
										<TableCell >{materia.condicion}</TableCell>
									</TableRow>
								)}
							</TableBody>
							</Table>
						</TableContainer>
						<Typography variant='h6' style={{marginTop:'1em'}}> Materias Regularizadas </Typography>
					<TableContainer>
						<Table size='small'>
							<TableHead>
								<TableRow>
									<TableCell sx={{fontWeight:'bold'}}>Materia</TableCell>
									<TableCell sx={{fontWeight:'bold'}}>Nota</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{career.materiasRegularizadas.map((materia,index) =>
									<TableRow key={index}>
										<TableCell width={300}>{materia.materia}</TableCell>
										<TableCell >{materia.nota}</TableCell>
									</TableRow>
								)}
							</TableBody>
							</Table>
						</TableContainer>
				</Container>
				
			</Container>
		</Paper>
	)
}

export default DisplayCarreers;