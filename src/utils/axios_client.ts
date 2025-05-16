import axios from 'axios'
import { CONSTANTS } from './constants'
import { clearLocalStorage } from './clear_local_storage'

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
			clearLocalStorage()
			window.location.reload()
		}

		return Promise.reject(error)
	}
)

export default apiClient
