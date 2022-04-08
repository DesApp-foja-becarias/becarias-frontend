import axios from '../axios';
export const sendEmail = (emails, subject, htmlText,attachments) => {
	/**
	 * @param {Array} emails
	 * @param {String} subject
	 * @param {String} htmlText
	 * @param {Array} attachments
	 * @returns {Promise}
	 */

	//TODO: Cambiar a la ruta correcta
	return axios.post('api/sendemail', {
		emails,
		subject,
		htmlText,
		attachments
	});
}