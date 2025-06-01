import { useGoogleLogin } from '@react-oauth/google'
import { Link, useNavigate } from 'react-router-dom'
import useAppState from '../../../../global_states/appState'
import Button from '../../../buttons/Button/Button'
import Card from '../../../containers/Card/Card'
import '../AuthPage.css'

const LoginForm = () => {
	const { validateAccessToken } = useAppState()
	const navigate = useNavigate()

	const handleSuccess = (accessToken: string) => {
		localStorage.setItem('access_token', accessToken)
		validateAccessToken().then(() => {
			if (localStorage.getItem('user_type') === 'owner')
				navigate('/locatario/tienda')
			else navigate('/explorar')
		})
	}

	const login = useGoogleLogin({
		onSuccess: response => handleSuccess(response.access_token),
		onError: () => {
			console.log('Error de autenticación')
		},
	})

	return (
		<div>
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
					<Button className='primary auth-button' onClick={() => login()}>
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
		</div>
	)
}

export default LoginForm
