import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('user_type') === 'owner')
			navigate('/locatario/tienda')
		else navigate('/tiendas')
	}, [navigate])

	return null
}

export default HomePage
