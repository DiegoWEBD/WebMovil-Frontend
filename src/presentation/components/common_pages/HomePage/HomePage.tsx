import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
	const navigate = useNavigate()
	useEffect(() => {
		navigate('/tiendas')
	}, [navigate])

	return null
}

export default HomePage
