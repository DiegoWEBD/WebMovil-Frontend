import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import User from '../../../../domain/User/User'
import { CONSTANTS } from '../../../../utils/constants'
import useAppState from '../../../global_states/appState'
import Button from '../../buttons/Button/Button'
import PersonalInfoCard from './PersonalInfoCard/PersonalInfoCard'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import './ProfilePage.css'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
	const { basicUserInfo } = useAppState()
	const navigate = useNavigate()

	const { data } = useQuery<User | undefined>({
		queryKey: ['userData', basicUserInfo],
		queryFn: async () => {
			if (!basicUserInfo) return undefined
			const { data } = await axios.get(
				`${CONSTANTS.API_URL}/users/${encodeURIComponent(basicUserInfo.email)}`
			)

			return new User(
				data.email,
				data.full_name,
				data.phone,
				data.profile_picture
			)
		},
	})

	return (
		<div className='profile-page'>
			<ProfileHeader user={data} />
			<PersonalInfoCard user={data} />
			<Button
				className='secondary'
				onClick={() => {
					localStorage.removeItem('access_token')
					navigate('/login')
				}}
			>
				Cerrar sesión
			</Button>
		</div>
	)
}

export default ProfilePage
