import './ProfileCard.css'
import { ReactNode } from 'react'

type ProfileCardProps = {
	children: ReactNode
}

const ProfileCard = ({ children }: ProfileCardProps) => {
	return <div className='profile-card'> {children} </div>
}

export default ProfileCard
