import axios from 'axios';

export const getTutor = (id) => {
    return axios.get(`/api/tutor/${id}`);
}

export const getTutors = () => {
    return axios.get('/api/tutor');
}

export const createTutor = (tutor) => {
    return axios.post('/api/tutor', tutor);
}

export const updateTutor = (tutor) => {
    return axios.put(`/api/tutor/${tutor.id}`, tutor);
}

export const deleteTutor = (id) => {
    return axios.delete(`/api/tutor/${id}`);
}

