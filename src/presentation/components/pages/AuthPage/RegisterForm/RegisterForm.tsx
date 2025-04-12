import { TokenResponse, useGoogleLogin } from '@react-oauth/google'

import '../LoginForm/LoginForm.css'
import RegisterButton from './RegisterButton/RegisterButton'
import { registerUser } from '../../../../auth/auth'
import useAppState from '../../../../global_states/appState'

const RegisterForm = () => {
	const { setUserEmail } = useAppState()

	const handleSuccess = (
		response: Omit<TokenResponse, 'err' | 'error_description' | 'error_uri'>
	) => {
		const accessToken = response.access_token

		registerUser(
			accessToken,
			'Diego Maldonado',
			'+56924587154',
			'diego.png',
			'owner'
		).then(setUserEmail)
	}

	const handleError = (
		error: Pick<TokenResponse, 'error_description' | 'error_uri' | 'error'>
	) => {
		console.log(error)
	}

	const googleLogin = useGoogleLogin({
		onSuccess: handleSuccess,
		onError: error => handleError(error),
		scope: 'email profile',
	})

	return (
		<div className='login-form'>
			<RegisterButton onClick={googleLogin}>Registrar Locatario</RegisterButton>
		</div>
	)
}

export default RegisterForm
