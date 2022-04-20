import React, { useEffect,useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Chip, Container, Divider, Input, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Proptypes from 'prop-types';
import useMailSender from '../../hooks/useMailSender';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const usersMock = [
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
	{
		id: 1,
		name: 'Juan Perez',
		email: ' jperez@gmail.com',
	},
]

const useStyles = makeStyles((theme) => ({

	mailSenderContainer:{
		margin: "1rem 0",
		textDecoration: "none",
	},
	paperContainer:{
		padding: "1rem"
	},
    selectedMailContainer: {
        display: 'flex',
				margin: "1rem 0",
				maxHeight: "7rem",
				overflowY:"scroll",
				'&::-webkit-scrollbar': {
					width: '0.5rem',
				height: '0.5rem',
				background: '#cccccc',
				borderRadius: '0.5rem',
				}
		},

}));

const MailSender = ({ users }) => {
	const {
		setShowMailSender,
		showMailSender,
		sendMail,
	} = useMailSender()
	const [selectedUsers, setSelectedUsers] = useState([])
	const [subject, setSubject] = useState('')
	const [text, setText] = useState('')
	useEffect(() => {
		if(users){
			setSelectedUsers(users);
			console.log(selectedUsers)
			}
	}, [users]);

const classes = useStyles();
    return(
        <Container className={classes.mailSenderContainer}>
					{!showMailSender &&
						<Button
							variant="contained"
								color="primary"	
								onClick={() => setShowMailSender(true)}
								>
									Mandar Mail
						</Button>
					}
					{showMailSender &&
					<Paper elevation={8} className={classes.paperContainer}>
						<Container>
							<Box display="flex" justifyContent="flex-end">
								<Button
									variant="contained"
									color="error"	
									onClick={() => setShowMailSender(false)}
									>
										X
								</Button>
							</Box>
							<Typography variant="h6">
								Enviar Correo
							</Typography>
							<Divider />
							<Box className={classes.selectedMailContainer}>
								{/* Lista de emails seleccionados*/}
								<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
								{selectedUsers.map((value) => (
										<Chip key={value.id} label={value.email} />
								))}
								</Box>		
							</Box>
							<Divider />
							{/* Armado del mail */}
							<Container>
								<Typography variant="h6">
									Asunto
								</Typography>
								<TextField
									id="outlined-basic"
									variant="outlined"
									fullWidth
									onChange={(e) => setSubject(e.target.value)}
								/>
								<Typography variant="h6">
									Mensaje
								</Typography>
								<ReactQuill theme="snow" value={text} onChange={(e) => setText(e)} 
									modules={
										{
											toolbar: [
												[{ 'header': [1, 2, 3, false] }],
												['bold', 'italic', 'underline', 'strike', 'blockquote'],
												[{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
												['link', 'image'],
												['clean']
											]
										}
									}
									/>
								<Typography variant="h6">
									Adjuntos
								</Typography>
									<Input sx={{marginBottom:'1rem'}} type="file" id="contained-button-file" fullWidth />
								<Button variant="contained" color="primary" onClick={() => {
									sendMail({selectedUsers, subject, htmlText: text})
								}}>
									Enviar
								</Button>
							</Container>
							<Divider />
						</Container>
						</Paper>
					}	
        </Container>
    )
}

MailSender.propTypes = {
	users: Proptypes.array
}


export default MailSender;
