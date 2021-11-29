import React from 'react';
import { TableContainer,Table,TableHead,TableRow,TableCell, TableBody,Paper } from '@mui/material';

const rows = [
    {name: 'Banco', valor: 'Banco Nacion'},
    {name: 'Nombre de dueño de cuenta', valor: 'Juan Perez'},
    {name: 'Número', valor: '123456789'},
    {name: 'Tipo', valor: 'Caja de Ahorro en pesos'},
    {name: 'Sucursal', valor: "Hurlingham"},
    {name: 'CVU', valor:'2850590940090418135201'},
]

const TablaMock = () => {
    return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    
        <TableBody>
        {rows.map((row) => (
            <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.valor}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
    );
}

export default TablaMock;