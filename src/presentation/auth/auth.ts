import axios from 'axios'
import { CONSTANTS } from '../../utils/constants'
import BasicUserInfo from '../user/BasicUserInfo'

export const validateAccessToken = async (): Promise<BasicUserInfo | null> => {
	const accessToken = localStorage.getItem('access_token')

	if (!accessToken) return null

	try {
		const { data } = await axios.get(`${CONSTANTS.API_URL}/auth/validate`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})

		localStorage.setItem('user_type', data.user_type)
		localStorage.setItem('user_email', data.user_email)

		return {
			email: data.user_email,
			userType: data.user_type,
		}
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Validación fallida:', error.response?.data?.error || error)
		} else {
			console.error('Error inesperado:', error)
		}
		localStorage.removeItem('access_token')
		localStorage.removeItem('user_type')
		localStorage.removeItem('user_email')
		localStorage.removeItem('owner_selected_store_id')
		localStorage.removeItem('owner_selected_store_name')
		localStorage.removeItem('owner_selected_store_is_active')

		return null
	}
}

export const registerUser = async (
	accessToken: string,
	fullName: string,
	phone: string,
	profilePicture: string,
	userType: string
): Promise<string | null> => {
	try {
		const { data } = await axios.post(
			`${CONSTANTS.API_URL}/auth/register`,
			{
				phone,
				full_name: fullName,
				profile_picture: profilePicture,
				user_type: userType,
			},
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)
		localStorage.setItem('access_token', accessToken)
		return data
	} catch (error) {
		console.error('Registro fallido:', error)

		return null
	}
}
