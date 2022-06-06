import React from 'react';
import { TableContainer,Table,TableHead,TableRow,TableCell, TableBody,Paper, Button } from '@mui/material';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

const TableActivities = (props) => {
    const activities = props.activities;

    return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Fecha Inicio</TableCell>
            <TableCell align="right">Fecha Final</TableCell>
            <TableCell align='right'>Estado   </TableCell>
            <TableCell align='right'></TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {activities.map((activitie) => (
            <TableRow
            key={activitie.Actividad.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {activitie.Actividad.name}
                </TableCell>
                <TableCell align="right">{DateTime.fromISO(activitie.Actividad.startDate).plus({ hours: 3 }).toFormat('dd/MM/yyyy').toLocaleString()}</TableCell>
                <TableCell align="right">{DateTime.fromISO(activitie.Actividad.endDate).plus({ hours: 3 }).toFormat('dd/MM/yyyy').toLocaleString()}</TableCell>
                <TableCell align='right'>{activitie.Actividad.validity ? "En curso" : "Terminada"}</TableCell>
                <TableCell align='right'>
                    <Link style={{textDecoration:"none"}} to={`/actividades/detalles/${activitie.ActividadId}`}>
                    <Button color="primary" variant="contained" size='small' sx={{color:'#fafafa'}}>
                        Ver
                    </Button>
                    </Link>
                </TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
    );
}

export default TableActivities;