import '../AuthPage.css'
import './RegisterForm.css'

import { TokenResponse, useGoogleLogin } from '@react-oauth/google'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../../../auth/auth'
import useAppState from '../../../../global_states/appState'
import Button from '../../../buttons/Button/Button'
import Card from '../../../containers/Card/Card'

const RegisterForm = () => {
	const { setBasicUserInfo } = useAppState()
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
			setBasicUserInfo({ email: email as string, userType: 'owner' })
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
		<Card className='auth-form-card'>
			<header className='auth-form-header'>
				<div className='auth-form-logo-plus-title'>
					<h2 className='auth-form-title'>Crear una cuenta</h2>
				</div>
				<p className='auth-form-subtitle'>Únete a la comunidad de MiBarrio</p>
			</header>
			<div className='auth-fields'>
				<div className='register-fields'>
					<div className='register-fullname-section'>
						<div className='register-field'>
							<label>Nombre(s)</label>
							<input
								className='register-input'
								type='text'
								placeholder='Juan'
							/>
						</div>
						<div className='register-field'>
							<label>Apellido(s)</label>
							<input
								className='register-input'
								type='text'
								placeholder='Pérez Contreras'
							/>
						</div>
					</div>
					<div className='register-field'>
						<label>Teléfono</label>
						<input
							className='register-input'
							type='number'
							placeholder='81549768'
						/>
					</div>
				</div>
				<Button className='primary auth-button' onClick={googleLogin}>
					Crear cuenta
				</Button>
			</div>
			<footer className='auth-form-footer'>
				<p>¿Ya tienes una cuenta?</p>
				<Link to='/login' className='auth-footer-link'>
					Inicia sesión
				</Link>
			</footer>
		</Card>
	)
}

export default RegisterForm
