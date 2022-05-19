import axios from '../axios';

const scholarUrl = '/api/becarias'

export const getScholar =async (scholarId) => 
{
    return await axios.get(`${scholarUrl}/${scholarId}`);
};

export const getScholars = () => {
    return axios.get(scholarUrl);
}

export const updateScholar = (scholarId, scholar) => {
    return axios.put(`${scholarUrl}/${scholarId}`, scholar)
};

export const createScholar = (scholar) => {
    return axios.post(scholarUrl, scholar);
};

export const downScholar = (scholar) => {
    return axios.put(`${scholarUrl}/${scholar.id}`, {...scholar, actualState: 'Baja'})
}

export const acceptScholar = (scholar) => {
    return axios.put(`${scholarUrl}/${scholar.id}`, {...scholar, actualState: 'Aceptada'})
}

export const setTutorForScholar = (relation) => {
    return axios.post('/api/becariaTutor', relation);
}

export const deleteTutorForScholar = (idRelation) => {
    return axios.delete(`/api/becariaTutor/tutorBecaria/${idRelation}`);
}
