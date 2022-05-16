import React from 'react';
import { TableContainer,Table,TableHead,TableRow,TableCell, TableBody,Paper } from '@mui/material';

const rows = [
    {field:'bank', name: 'Banco', value: ''},
    {field:'accountHolder', name: 'Nombre de dueño de cuenta', value: ''},
    {field:'accountNumber', name: 'Número', value: ''},
    {field:'accountType', name: 'Tipo', value: ''},
    {field:'branchOffice', name: 'Sucursal', value: ""},
    {field:'cbu', name: 'CBU', value:''},
]


const TablaMock = (values) => {
    
    return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    
        <TableBody>
        {rows.map((row) => (
            <TableRow
            key={row.field}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
    );
}

export default TablaMock;