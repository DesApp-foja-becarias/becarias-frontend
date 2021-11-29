import axios from 'axios';

export const getActivitiesFromUser = (userId) => {
    return axios.get(`/api/activities/${userId}`);
}

export const getActivity = (activityId) => {
    return axios.get(`/api/activities/${activityId}`);
}

export const getAllActivities = () => {
    return axios.get(`/api/activities`);
}

export const createActivity = (activity) => {
    return axios.post('/api/activities', activity);
}

export const updateActivity = (activityId, activity) => {
    return axios.put(`/api/activities/${activityId}`, activity);
}

export const deleteActivity = (activityId) => {
    return axios.delete(`/api/activities/${activityId}`);
}
