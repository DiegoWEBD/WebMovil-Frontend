import { TokenResponse, useGoogleLogin } from '@react-oauth/google'
import { Link, useNavigate } from 'react-router-dom'
import useAppState from '../../../../global_states/appState'
import Button from '../../../buttons/Button/Button'
import Card from '../../../containers/Card/Card'
import '../AuthPage.css'

const LoginForm = () => {
	const { validateAccessToken, basicUserInfo } = useAppState()
	const navigate = useNavigate()

	const handleSuccess = (
		response: Omit<TokenResponse, 'err' | 'error_description' | 'error_uri'>
	) => {
		const accessToken = response.access_token
		localStorage.setItem('access_token', accessToken)
		validateAccessToken().then(() => {
			if (basicUserInfo) navigate('/tiendas')
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
		<Card className='auth-form-card'>
			<header className='auth-form-header'>
				<div className='auth-form-logo-plus-title'>
					<h2 className='auth-form-title'>Iniciar sesión</h2>
				</div>
				<p className='auth-form-subtitle'>
					Ingresa a tu cuenta para acceder a todas las funciones
				</p>
			</header>
			<div className='auth-fields'>
				<Button className='primary auth-button' onClick={googleLogin}>
					Iniciar sesión
				</Button>
			</div>
			<footer className='auth-form-footer'>
				<p>¿No tienes una cuenta?</p>
				<Link to='/register' className='auth-footer-link'>
					Regístrate
				</Link>
			</footer>
		</Card>
	)
}

export default LoginForm
