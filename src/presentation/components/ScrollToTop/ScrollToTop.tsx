import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo({ top: 0 }) // you can remove 'behavior' if you want instant scroll
	}, [pathname])

	return null
}

export default ScrollToTop
