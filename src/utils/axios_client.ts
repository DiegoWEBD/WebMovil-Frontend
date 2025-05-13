import axios from 'axios'
import { CONSTANTS } from './constants'

const apiClient = axios.create({
	baseURL: CONSTANTS.API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

apiClient.interceptors.request.use(
	config => {
		const token = localStorage.getItem('access_token')
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	error => Promise.reject(error)
)

apiClient.interceptors.response.use(
	response => response,
	async error => {
		if (error.response.status === 401 || error.response.status === 403) {
			localStorage.removeItem('access_token')
			window.location.href = '/login'
		}

		return Promise.reject(error)
	}
)

export default apiClient
