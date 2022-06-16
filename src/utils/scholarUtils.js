import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const mapTutorScholarsForSearcher = (scholars) => {
	return scholars.map((scholar) => ({...scholar,
		link:  
			
	<Link style={{textDecoration:"none"}} to={`/becaria/${scholar.id}`}>
			<Button color="secondary" variant="contained" size='small' sx={{color:'#fafafa'}}> 
					Ver Perfil
			</Button>
	</Link>
	,
	type:"Becaria"
	}));
}

export const mapScholarsForSearcher = (scholars) => {
    //add link button to the datagrid from mui
    return scholars.map((scholar) => ({...scholar,
			carreras:scholar.academicStatus.reduce((acc, curr) => {
				return acc.concat(`${curr.carrera.carrera} ,`)
			}, ''),
			link:  
        
    <Link style={{textDecoration:"none"}} to={`/becaria/${scholar.id}`}>
        <Button color="secondary" variant="contained" size='small' sx={{color:'#fafafa'}}> 
            Ver Perfil
        </Button>
    </Link>
    ,
    type:"Becaria"
    }));
}

export const showComponentWhen_ = (condition, component) => {
    return condition ? component : null;
}