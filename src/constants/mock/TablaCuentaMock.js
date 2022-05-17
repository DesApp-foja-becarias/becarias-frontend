import React from 'react';
import { TableContainer,Table,TableRow,TableCell, TableBody,Paper } from '@mui/material';


const TablaMock = (props) => {
    const { bank, accountHolder, accountNumber, accountType, branchOffice, cbu } = props.accountData;

    return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    
        <TableBody>
            <TableRow>
                <TableCell>Banco</TableCell>
                <TableCell align="right">{bank}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Nombre de dueño de cuenta</TableCell>
                <TableCell align="right">{accountHolder}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Numero</TableCell>
                <TableCell align="right">{accountNumber}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Tipo</TableCell>
                <TableCell align="right">{accountType}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Sucursal</TableCell>
                <TableCell align="right">{branchOffice}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>CBU</TableCell>
                <TableCell align="right">{cbu}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
    </TableContainer>
    );
}

export default TablaMock;