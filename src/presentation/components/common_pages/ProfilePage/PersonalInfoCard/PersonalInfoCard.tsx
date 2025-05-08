import './PersonalInfoCard.css'

import User from '../../../../../domain/User/User'
import Card from '../../../containers/Card/Card'

type PersonalInfoCardProps = {
	user: User | undefined
}

const PersonalInfoCard = ({ user }: PersonalInfoCardProps) => {
	return (
		<Card className='personal-info-card'>
			<header className='personal-info-header'>Información Personal</header>
			<div className='personal-info'>
				<div className='info-item'>
					<p className='info-label'>Nombre completo</p>
					<p className='info-value'>{user?.getFullName()}</p>
				</div>
				<div className='info-item'>
					<p className='info-label'>Correo</p>
					<p className='info-value'>{user?.getEmail()}</p>
				</div>
				<div className='info-item'>
					<p className='info-label'>Teléfono</p>
					<p className='info-value'>{user?.getPhone()}</p>
				</div>
			</div>
		</Card>
	)
}

export default PersonalInfoCard
