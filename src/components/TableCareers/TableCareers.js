import React, {useEffect,useState} from 'react';
import { TableContainer,Table,TableHead,TableRow,TableCell, TableBody,Paper } from '@mui/material';

const TableCareers = ({careers}) => {
    
    const [careersItems, setCareersItems] = useState([]);
    useEffect(() => {
        if(careers){
            const careersItems = async () => await careers.map(career => {
                const carrera = career.Carrera
                return carrera
            })
            careersItems().then(careers => setCareersItems(careers))
        }
    }, [careers])


    return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 300 }} aria-label="simple table">
    
        <TableBody>
        {careersItems.map((row) => (
            <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
    );
}

export default TableCareers;