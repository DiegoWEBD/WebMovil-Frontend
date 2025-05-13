import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import User from '../../../../domain/User/User'
import { CONSTANTS } from '../../../../utils/constants'
import useAppState from '../../../global_states/appState'
import Button from '../../buttons/Button/Button'
import PersonalInfoCard from './PersonalInfoCard/PersonalInfoCard'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import './ProfilePage.css'

const ProfilePage = () => {
	const { userEmail, validateAccessToken } = useAppState()

	const { data } = useQuery<User | undefined>({
		queryKey: ['userData'],
		queryFn: async () => {
			if (!userEmail) return undefined
			const { data } = await axios.get(
				`${CONSTANTS.API_URL}/users/${encodeURIComponent(userEmail)}`
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
					validateAccessToken()
				}}
			>
				Cerrar sesión
			</Button>
		</div>
	)
}

export default ProfilePage
