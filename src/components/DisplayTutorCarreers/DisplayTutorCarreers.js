import { Container, Paper, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react'

const DisplayTutorCarreers = ({carreers}) => {
    return (
			<Paper style={{padding:'1em'}}>
				<Table>
					<TableBody>
						{carreers.length > 0?
							carreers.map((career,index) =>
								<TableRow key={index}>
									<TableCell>{career.carrera.carrera}</TableCell>
								</TableRow>
							)
							:
							<Container>
								<Typography variant='subtitle1'>
										No está en ninguna carrera
								</Typography>
							</Container>
					}
				</TableBody>
				</Table>
			</Paper>
    );
}

export default DisplayTutorCarreers