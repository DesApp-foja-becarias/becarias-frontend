import  {useContext} from 'react'
import DialogContext from '../context/DialogContext'

function useDialog() {
	//pass function to confirm dialog
	const { setOpen,  setTitle, setContent, setConfirm, setCancel} = useContext(DialogContext);
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