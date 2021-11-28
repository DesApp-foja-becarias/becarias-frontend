import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const mapTutorsForSearcher = (tutors) => {
    //add link button to the datagrid from mui
    return tutors.map((tutor) => ({...tutor, link:  
        
    <Link to={`/tutor/${tutor.id}`}>
        <Button> 
            Ir al perfil
        </Button>
    </Link>
    
    }));
}