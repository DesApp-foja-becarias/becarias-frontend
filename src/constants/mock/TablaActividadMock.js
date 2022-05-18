import React from 'react';
import { TableContainer,Table,TableHead,TableRow,TableCell, TableBody,Paper, Button } from '@mui/material';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

const rows = [
    {name: '1 Estudiante, 1 Compañero', fechaInicio: '03/01/2020', fechaFinal: '01/06/2020'},
    {name: 'Rally Inovacion', fechaInicio: '16/06/2020', fechaFinal: '24/12/2020'},
    {name: 'Colaborador', fechaInicio: '07/03/2020', fechaFinal: '03/08/2020'},
]

const TablaActividadMock = (props) => {
    const activities = props.activities;
    console.log(activities)

    return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell>Actividad</TableCell>
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
                <TableCell align="right">{DateTime.fromISO(activitie.Actividad.startDate).plus({ hours: 3 }).toLocaleString()}</TableCell>
                <TableCell align="right">{DateTime.fromISO(activitie.Actividad.endDate).plus({ hours: 3 }).toLocaleString()}</TableCell>
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

export default TablaActividadMock;