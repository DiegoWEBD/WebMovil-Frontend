import '../AuthPage.css'
import './RegisterForm.css'

import { Link } from 'react-router-dom'
import Button from '../../../buttons/Button/Button'
import Card from '../../../containers/Card/Card'
import { useGoogleRegister } from '../hooks/useGoogleRegister'

const RegisterForm = () => {
	const registerClient = useGoogleRegister('client')
	const registerOwner = useGoogleRegister('owner')
	const registerDelivery = useGoogleRegister('delivery-man')

	return (
		<div>
			<Card className='auth-form-card'>
				<header className='auth-form-header'>
					<div className='auth-form-logo-plus-title'>
						<h2 className='auth-form-title'>Crear una cuenta</h2>
					</div>
					<p className='auth-form-subtitle'>Únete a la comunidad de MiBarrio</p>
				</header>
				<div className='auth-fields'>
					<Button className='primary auth-button' onClick={registerClient}>
						Comprador
					</Button>

					<Button className='primary auth-button' onClick={registerOwner}>
						Locatario
					</Button>

					<Button className='primary auth-button' onClick={registerDelivery}>
						Repartidor
					</Button>
				</div>
				<footer className='auth-form-footer'>
					<p>¿Ya tienes una cuenta?</p>
					<Link to='/login' className='auth-footer-link'>
						Inicia sesión
					</Link>
				</footer>
			</Card>
		</div>
	)
}

export default RegisterForm
