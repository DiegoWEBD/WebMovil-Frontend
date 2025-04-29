import './RegisterForm.css'

import { TokenResponse, useGoogleLogin } from '@react-oauth/google'
import RegisterButton from './RegisterButton/RegisterButton'
import { registerUser } from '../../../../auth/auth'
import useAppState from '../../../../global_states/appState'
import { Link, useNavigate } from 'react-router-dom'
import PageLogo from '../../../PageLogo/PageLogo'

const RegisterForm = () => {
	const { setUserEmail } = useAppState()
	const navigate = useNavigate()

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
		).then(email => {
			setUserEmail(email)
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
		<div className='register-form'>
			<header className='register-form-header'>
				<PageLogo className='secondary' />
				<h2 className='form-title'>Crear una cuenta</h2>
				<p className='form-subtitle'>Únete a la comunidad de MiBarrio</p>
			</header>
			<div className='fields'>
				<div className='fullname-section'>
					<div className='field'>
						<label>Nombre(s)</label>
						<input type='text' placeholder='Juan' />
					</div>
					<div className='field'>
						<label>Apellido(s)</label>
						<input type='text' placeholder='Pérez Contreras' />
					</div>
				</div>
				<div className='field'>
					<label>Teléfono</label>
					<input type='number' placeholder='81549768' />
				</div>
				<RegisterButton onClick={googleLogin}>Crear cuenta</RegisterButton>
			</div>
			<footer className='register-form-footer'>
				<p className='footer-text'>¿Ya tienes una cuenta?</p>
				<Link to='/login' className='footer-link'>
					Inicia sesión
				</Link>
			</footer>
		</div>
	)
}

export default RegisterForm
