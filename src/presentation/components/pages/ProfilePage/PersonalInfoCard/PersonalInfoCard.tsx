import './PersonalInfoCard.css'

import User from '../../../../../domain/User/User'
import ProfileCard from '../ProfileCard/ProfileCard'

type PersonalInfoCardProps = {
	data: User | null | undefined
}

const PersonalInfoCard = ({ data }: PersonalInfoCardProps) => {
	console.log(data)
	return (
		<ProfileCard>
			<header>Información Personal</header>
			<div className='personal-info'>
				<div className='info-item'>
					<p className='info-label'>Nombre completo</p>
					<p className='info-value'>{data?.getFullName()}</p>
				</div>
				<div className='info-item'>
					<p className='info-label'>Correo</p>
					<p className='info-value'>{data?.getEmail()}</p>
				</div>
				<div className='info-item'>
					<p className='info-label'>Teléfono</p>
					<p className='info-value'>{data?.getPhone()}</p>
				</div>
			</div>
		</ProfileCard>
	)
}

export default PersonalInfoCard
