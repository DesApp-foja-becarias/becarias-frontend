import {  Card,Typography,CardContent, CardActionArea, CardMedia } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
		noDecorator: {
			textDecoration: 'none',
			color: 'inherit'
		},
	});

const ConfigurationPage = () => {
	const classes = useStyles();
	return (
		<Box display='flex' justifyContent="space-evenly">
			<Link to='/' className={classes.noDecorator}>
			<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.istockphoto.com/photos/bible-study-multi-ethnic-group-multi-ethnic-group-of-friends-meet-for-picture-id1333641112?b=1&k=20&m=1333641112&s=170667a&w=0&h=_0ClNNxQJ-Z2beDR_B4R5KkdO8rLcJbZeTSI31qPaIY="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Materias
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Aqui podras ver las materias que estan disponibles en el sistema, editarlas y administrarlas a tu gusto.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
			</Link>
			<Link to='/' className={classes.noDecorator}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Carreras
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Aqui podras ver las carreras que estan disponibles en el sistema, editarlas y administrarlas a tu gusto.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
			</Link>
		<Link to="/actividades" className={classes.noDecorator}>
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image="https://media.istockphoto.com/photos/group-of-college-students-studying-together-picture-id1278978962?b=1&k=20&m=1278978962&s=170667a&w=0&h=bVA2tQGr1RTVvyl-LoVOGKusTAfsQXlLzRKkCoHw0WM="
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Actividades
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Aqui podras ver las actividades que estan disponibles en el sistema, editarlas y administrarlas a tu gusto.
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
  </Box>
    )
}

export default ConfigurationPage
