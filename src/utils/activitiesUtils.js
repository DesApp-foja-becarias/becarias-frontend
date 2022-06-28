import { Button } from '@mui/material';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

export const mapActivitiesForSearcher = (activities) => {
    //add link button to the datagrid from mui
    return activities.map((activitie) => ({...activitie,
			startDate: DateTime.fromISO(activitie.startDate).plus({ hours: 3 }).toFormat('dd/MM/yyyy').toLocaleString( ),
			endDate: DateTime.fromISO(activitie.endDate).plus({ hours: 3 }).toFormat('dd/MM/yyyy').toLocaleString(),
			validity: activitie.validity? 'Activa' : 'Inactiva',
			link:  
 
    <Link style={{textDecoration:"none"}} to={`/actividades/detalles/${activitie.id}`}> 
        <Button color="secondary" variant="contained" size='small' sx={{color:'#fafafa'}}> 
            Ver Actividad
        </Button>
    </Link>
    ,
    type:"Actividad"
    }));
}

export const showComponentWhen_ = (condition, component) => {
    return condition ? component : null;
}