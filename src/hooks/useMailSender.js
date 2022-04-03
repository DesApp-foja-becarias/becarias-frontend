import React, { useState } from "react"
//put alias to sendEmail
import { sendEmail } from '../services/email/serviceEmail';
import useSnackbar from "./useSnackbar";
function useMailSender() {
		const [showMailSender,setShowMailSender] = useState(false);
		const { showSnackbar } = useSnackbar()

		const sendMail = async (selectedUsers, subject, text) => {
				const response = await sendEmail({
						emails : selectedUsers,
						subject: subject,
						text: text
				}).then(() => {
						showSnackbar('El envio de correos ha sido exitoso', 'success')
				}).catch(() => {
						showSnackbar('El envio de correos ha fallado', 'error')
				})
				return response;
				}

		return {
				setShowMailSender,
				showMailSender,
				sendMail,
		}
}

export default useMailSender