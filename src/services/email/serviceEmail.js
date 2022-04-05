import axios from '../axios';
export const sendEmail = (emails, subject, text) => {
	return axios.post('api/documentos/sendemail', {
		emails,
		subject,
		text
	});
}