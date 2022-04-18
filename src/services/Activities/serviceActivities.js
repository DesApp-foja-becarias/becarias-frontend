import axios from 'axios';

const activitiesUrl = '/api/actividades'

export const getActivitiesFromUser = (userId) => {
    return axios.get(`${activitiesUrl}/${userId}`);
}

export const getActivity = (activityId) => {
    return axios.get(`${activitiesUrl}/${activityId}`);
}

export const getAllActivities = () => {
    return axios.get(activitiesUrl);
}

export const createActivity = (activity) => {
    return axios.post(activitiesUrl, activity);
}

export const updateActivity = (activityId, activity) => {
    return axios.put(`${activitiesUrl}/${activityId}`, activity);
}

export const deleteActivity = (activityId) => {
    return axios.delete(`${activitiesUrl}/${activityId}`);
}
