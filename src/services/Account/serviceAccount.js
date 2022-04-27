import axios from 'axios';
//TODO Falta definir los endpoints con el back
export const getAccountFromUser = (userId) => {
    return axios.get(`/api/account/${userId}`);
}

export const getAccountFromId = (accountId) => {
    return axios.get(`/api/account/${accountId}`);
}

export const updateAccount = (accountId, account) => {
    return axios.put(`/api/account/${accountId}`, account);
}

export const createAccount = (account) => {
    return axios.post(`/api/account`, account);
}

export const deleteAccount = (accountId) => {
    return axios.delete(`/api/account/${accountId}`);
}

