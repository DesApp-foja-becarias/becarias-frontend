import axios from '../axios';

const activitiesUrl = '/api/actividades'
const activityScholarsUrl = '/api/becariaActividad/BecariaEnActividad'
const activityScholars = '/api/becariaActividad/agregarBecarias'
const deleteActivityScholars = '/api/becariaActividad'


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
	/**
	 * {
	 * 	name: 
	 * 	description:
	 * 	startDate:
	 * 	endDate:
	 * 	validity:
	 * }
	 */
    return axios.post(activitiesUrl, activity);
}

export const updateActivity = (activityId, activity) => {
    return axios.put(`${activitiesUrl}/${activityId}`, activity);
}

export const deleteActivity = (activityId) => {
    return axios.delete(`${activitiesUrl}/${activityId}`);
}

export const getScholarInActivity = (activityId) => {
		return axios.get(`${activityScholarsUrl}/${activityId}`);
}

export const pushScholarInActivity = (activityId, scholarArray) => {
		const mappedScholars = scholarArray.map(scholar => {
			return scholar.id
		})
		return axios.post(`${activityScholars}`, {
			ActividadId: activityId,
			Becarias: mappedScholars
		})
}

export const deleteScholarActivityRelations = (scholarIds,activityId ) => {
		return axios.delete(`${deleteActivityScholars}`, {
			data: 
			{
				Actividad: activityId,
				Becarias: scholarIds
			}
		})
}

export const deleteEveryScholarActivityRelations = (activityId) => {
		return axios.delete(`${deleteActivityScholars}/${activityId}`);
}
