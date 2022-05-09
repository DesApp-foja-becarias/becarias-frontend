import React, {useContext,useState,useEffect} from 'react'
import DialogContext from '../context/DialogContext'

function useDialog() {
	//pass function to confirm dialog
	const {open, setOpen, title, setTitle, content, setContent, confirm, setConfirm, cancel, setCancel} = useContext(DialogContext);
	const openDialog = (title, content, confirm, cancel) => {
		setOpen(true);
		setTitle(title);
		setContent(content);
		setConfirm(() => confirm);
		setCancel(() => cancel);
	}
	const closeDialog = () => {
		setOpen(false);
	}


	return {
		openDialog,
		closeDialog,
	}
}

export default useDialog