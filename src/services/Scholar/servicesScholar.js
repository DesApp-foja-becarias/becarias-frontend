import axios from '../axios';

const scholarUrl = '/api/becarias'

export const getScholar =async (scholarId) => 
{
    console.log(scholarId)
    return await axios.get(`${scholarUrl}/${scholarId}`);
};

export const getScholars = () => {
    console.log('getScholars')
    return axios.get(scholarUrl);
}

export const updateScholar = (scholarId, scholar) => {
    return axios.put(`${scholarUrl}/${scholarId}`, scholar).then(
        res => {
            console.log(res.data)
        }
    ).catch(err => {
        console.log(err);
    });
};

export const createScholar = (scholar) => {
    return axios.post(scholarUrl, scholar);
};

export const downScholar = (scholar) => {
    return axios.put(`${scholarUrl}${scholar.id}`, {...scholar, scholar: {actualState: 3}});
}

export const assignCarrers = (scholarId, carrerId) => {
}