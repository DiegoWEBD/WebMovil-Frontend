import './ProfileHeader.css'

import { LuTags, LuStore, LuStar, LuCalendar } from 'react-icons/lu'
import Card from '../../../containers/Card/Card'
import User from '../../../../../domain/User/User'

type ProfileHeaderProps = {
	user: User | undefined
}

const ProfileHeader = ({ user }: ProfileHeaderProps) => {
	return (
		<Card className='profile-header'>
			<div className='picture-plus-info'>
				<div className='profile-picture' />
				<div className='profile-header-info'>
					<p className='user-fullname'>{user?.getFullName()}</p>
					<p className='user-email'>{user?.getEmail()}</p>

					<div className='profile-header-resume'>
						<div className='resume-item'>
							<LuTags className='resume-icon' />
							<div className='highlighted-info'>12</div> Ventas
						</div>
						<div className='resume-item'>
							<LuStore className='resume-icon' />
							<div className='highlighted-info'>3</div> Tiendas
						</div>
						<div className='resume-item'>
							<LuStar className='resume-icon' />
							<div className='highlighted-info'>8</div> Reseñas
						</div>
						<div className='resume-item'>
							<LuCalendar className='resume-icon' />
							Miembro desde Abril 2025
						</div>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default ProfileHeader
