import { TokenResponse, useGoogleLogin } from '@react-oauth/google'
import { validateAccessToken } from '../../../auth/auth'
import LoginButton from './LoginButton/LoginButton'
import './LoginForm.css'
import useAppState from '../../../global_states/appState'

const LoginForm = () => {
	const { setUserEmail } = useAppState()

	const handleSuccess = (
		response: Omit<TokenResponse, 'err' | 'error_description' | 'error_uri'>
	) => {
		const accessToken = response.access_token
		localStorage.setItem('access_token', accessToken)
		validateAccessToken().then(setUserEmail)
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
			<LoginButton onClick={googleLogin}>Iniciar Sesión</LoginButton>
		</div>
	)
}

export default LoginForm
