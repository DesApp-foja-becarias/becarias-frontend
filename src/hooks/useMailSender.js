import  { useState } from "react"
//put alias to sendEmail
import { sendEmail } from '../services/email/serviceEmail';
import useSnackbar from "./useSnackbar";
function useMailSender() {
		const [showMailSender,setShowMailSender] = useState(false);
		const { showSnackbar } = useSnackbar()

		const sendMail = async ({selectedUsers, subject, htmlText}) => {
				const selectedUsersMapped = selectedUsers.map(user => ({
					Email: user.email,
						Name: user.name,
				})
				)
				const response = await sendEmail({
						emails : selectedUsersMapped,
						subject: subject,
						HTMLPart: htmlText
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