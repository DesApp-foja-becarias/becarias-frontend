import React, {useEffect,useState} from 'react';
import { TableContainer,Table,TableHead,TableRow,TableCell, TableBody,Paper } from '@mui/material';
import { mapScholarsForSearcher, mapTutorScholarsForSearcher } from '../../utils/scholarUtils';

const TableScholars = ({scholars}) => {
    const [careersItems, setCareersItems] = useState([]);
    useEffect(() => {
        if(scholars){
						const scholarsMapped = mapTutorScholarsForSearcher(scholars)
            setCareersItems(scholarsMapped);
        }
    }, [scholars])


    return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell align="left">Apellido</TableCell>
                <TableCell align="left">Nombre</TableCell>
                <TableCell align="left">DNI</TableCell>
                <TableCell align="left">Link</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {careersItems.map((row) => (
            <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="left" component="th" scope="row">
                {row.lastname}
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                {row.name}
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                {row.dni}
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                {row.link}
                </TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
    );
}

export default TableScholars;