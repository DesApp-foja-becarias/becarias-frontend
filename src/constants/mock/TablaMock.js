import React from 'react';
import { TableContainer,Table,TableHead,TableRow,TableCell, TableBody,Paper } from '@mui/material';
import { mappedDate } from '../../utils/func';

const rows = [
    {name: '1 Estudiante, 1 Compañero', fechaInicio: '03/01/2020', fechaFinal: '01/06/2020'},
    {name: 'Rally Inovacion', fechaInicio: '16/06/2020', fechaFinal: '24/12/2020'},
    {name: 'Colaborador', fechaInicio: '07/03/2020', fechaFinal: '03/08/2020'},
]

const TablaMock = () => {
    return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell>Actividad</TableCell>
            <TableCell align="right">Fecha Inicio</TableCell>
            <TableCell align="right">Fecha Final</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.fechaInicio}</TableCell>
                <TableCell align="right">{row.fechaFinal}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
    );
}

export default TablaMock;