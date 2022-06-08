import axios from '../axios'
const CARREERS_URL = 'api/carreras'

export const getCarreers = async () => {
	return await axios.get(CARREERS_URL)
}
