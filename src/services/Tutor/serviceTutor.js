import axios from '../axios';

const tutorServiceURL = '/api/tutores'
const becariaTutorURL = '/api/becariaTutor'
const tutorCarreraURL = '/api/tutorCarrera'

export const getTutor =  (id) => {
    return  axios.get( tutorServiceURL +`/${id}`);
}

export const getTutors = async () => {
    return await axios.get(tutorServiceURL);
}

export const createTutor =  async (tutor) => {
        return await axios.post(tutorServiceURL, tutor);
    }

export const updateTutor = async (tutor) => {
    return await axios.put(tutorServiceURL + `/${tutor.id}`,
        tutor);
}

export const deleteTutor = async (id) => {
    return await axios.delete(tutorServiceURL + `/${id}`);
}

export const getBecariasDeTutor = async (id) => {
		return await axios.get(becariaTutorURL + `/verBecarias/${id}`);
}

export const updateTutorCarreers = async (id, carreras) => {
		return await axios.put(tutorCarreraURL + `/${id}/carreras`,
			carreras);
}