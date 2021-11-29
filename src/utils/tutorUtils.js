import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const mapTutorsForSearcher = (tutors) => {
    //add link button to the datagrid from mui
    return tutors.map((tutor) => ({...tutor, link:  
        
    <Link style={{textDecoration:"none"}} to={`/tutor/${tutor.id}`}>
        <Button color="secondary" variant="contained" size='small' sx={{color:'#fafafa'}}> 
            Ver Perfil
        </Button>
    </Link>
    
    ,
    type: "Tutor"
}));
}