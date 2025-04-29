import { TokenResponse, useGoogleLogin } from '@react-oauth/google'
import { Link, useNavigate } from 'react-router-dom'
import { validateAccessToken } from '../../../../auth/auth'
import useAppState from '../../../../global_states/appState'
import PageLogo from '../../../PageLogo/PageLogo'
import LoginButton from './LoginButton/LoginButton'
import './LoginForm.css'

const LoginForm = () => {
	const { setUserEmail } = useAppState()
	const navigate = useNavigate()

	const handleSuccess = (
		response: Omit<TokenResponse, 'err' | 'error_description' | 'error_uri'>
	) => {
		const accessToken = response.access_token
		localStorage.setItem('access_token', accessToken)
		validateAccessToken().then(userEmail => {
			setUserEmail(userEmail)
			navigate('/tiendas')
		})
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
			<header className='register-form-header'>
				<PageLogo className='secondary' />
				<h2 className='form-title'>Iniciar sesión</h2>
				<p className='form-subtitle'>
					Ingresa a tu cuenta para acceder a todas las funciones
				</p>
			</header>
			<div className='fields'>
				<LoginButton onClick={googleLogin}>Iniciar sesión</LoginButton>
			</div>
			<footer className='register-form-footer'>
				<p>¿No tienes una cuenta?</p>
				<Link to='/register' className='footer-link'>
					Regístrate
				</Link>
			</footer>
		</div>
	)
}

export default LoginForm
