import axios from 'axios';

export const  getScholar = (scholarId) => {
    return axios.get(`/api/scholar/${scholarId}`);
};

export const  getScholars = () => {
    return axios.get(`/api/scholar`);
}

export const updateScholar = (scholarId, scholar) => {
    return axios.put(`/api/scholar/${scholarId}`, scholar);
};

export const createScholar = (scholar) => {
    return axios.post(`/api/scholar`, scholar);
};

export const downScholar = (scholar) => {
    return axios.put(`/api/scholar/${scholar.id}`, {...scholar, scholar: {actualState: 3}});
}