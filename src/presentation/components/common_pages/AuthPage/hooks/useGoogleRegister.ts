// useGoogleRegister.ts
import { useGoogleLogin, TokenResponse } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../../../auth/auth'
import useAppState from '../../../../global_states/appState'

export const useGoogleRegister = (
	userType: 'client' | 'owner' | 'delivery-man'
) => {
	const navigate = useNavigate()
	const { setBasicUserInfo } = useAppState()

	const handleSuccess = (
		response: Omit<TokenResponse, 'err' | 'error_description' | 'error_uri'>
	) => {
		const accessToken = response.access_token

		registerUser(
			accessToken,
			'Diego Maldonado',
			'+56924587154',
			'diego.png',
			userType
		).then(email => {
			setBasicUserInfo({ email: email as string, userType })
			navigate('/tiendas')
		})
	}

	const handleError = (
		error: Pick<TokenResponse, 'error_description' | 'error_uri' | 'error'>
	) => {
		console.log(error)
	}

	return useGoogleLogin({
		onSuccess: handleSuccess,
		onError: handleError,
		scope: 'email profile',
	})
}
