import axios from '../axios';
export const sendEmail = (emails, subject, text) => {
	return axios.post('/send-mail', {
		emails,
		subject,
		text
	});
}