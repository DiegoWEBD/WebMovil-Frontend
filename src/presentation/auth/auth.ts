import axios from 'axios'
import { CONSTANTS } from '../../utils/constants'

export const validateAccessToken = async (): Promise<string | null> => {
	const accessToken = localStorage.getItem('access_token')

	if (!accessToken) return null

	try {
		const { data } = await axios.get(`${CONSTANTS.API_URL}/auth/validate`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
		console.log('access_token validado:', accessToken)
		console.log(data)
		return data.user_email
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Validación fallida:', error.response?.data?.error || error)
		} else {
			console.error('Error inesperado:', error)
		}
		localStorage.removeItem('access_token')
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
			'http://localhost:3006/register',
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
		if (axios.isAxiosError(error)) {
			console.error('Registro fallido:', error.response?.data?.error || error)
		} else {
			console.error('Error inesperado:', error)
		}

		return null
	}
}
