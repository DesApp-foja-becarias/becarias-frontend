import axios from 'axios';

export const getScholar =async (scholarId) => 
{
    console.log(scholarId)
    return await axios.get(`http://localhost:3001/api/becarias/${scholarId}`);
};

export const  getScholars = () => {
    return axios.get(`/api/scholar`);
}

export const updateScholar = (scholarId, scholar) => {
    return axios.put(`/api/scholar/${scholarId}`, scholar).then(
        res => {
            console.log(res.data)
        }
    ).catch(err => {
        console.log(err);
    });
};

export const createScholar = (scholar) => {
    return axios.post(`/api/scholar`, scholar);
};

export const downScholar = (scholar) => {
    return axios.put(`/api/scholar/${scholar.id}`, {...scholar, scholar: {actualState: 3}});
}