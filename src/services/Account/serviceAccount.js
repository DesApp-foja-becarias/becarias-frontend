import axios from '../axios';

const accountUrl = 'api/cuentas'

export const getAccounts = () => {
    return axios.get(`${accountUrl}`);
}

export const getAccountFromId = (accountId) => {
    return axios.get(`${accountUrl}/${accountId}`);
}

export const updateAccount = (accountId, account) => {
    return axios.put(`${accountUrl}/${accountId}`, account);
}

export const createAccount = (account) => {
    return axios.post(`${accountUrl}`, account);
}

export const deleteAccount = (accountId) => {
    return axios.delete(`${accountUrl}/${accountId}`);
}

