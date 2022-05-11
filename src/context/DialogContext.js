import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React, { createContext, useState } from 'react'

export const DialogContext = createContext();

export function DialogProvider({children}) {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [confirm, setConfirm] = useState(() => {});
	const [cancel, setCancel] = useState(() => {});

	return (
		<DialogContext.Provider value={{
			open,
			setOpen,
			title,
			setTitle,
			content,
			setContent,
			confirm,
			setConfirm,
			cancel,
			setCancel
		}}>
			{children}
		<Dialog open={open}
		onClose={() => {
			setOpen(false)
		}}
		>
			<DialogTitle>
				{title}
			</DialogTitle>
			<DialogContent>
				{content}
			</DialogContent>
			<DialogActions>
				{confirm && <Button onClick={() => {
					confirm()
					setOpen(false)
				}}> Confirmar </Button>}	
				{cancel && <Button onClick={() => {
					cancel()
					setOpen(false)
				}}> Rechazar </Button>
				}
				</DialogActions>
		</Dialog>
		</DialogContext.Provider>
	)
}



export default DialogContext