import './ToggleButton.css'

import { FaTimes, FaBars } from 'react-icons/fa'

type ToggleButtonProps = {
	className?: string
	menuOpen: boolean
	setMenuOpen: (menuOpen: boolean) => void
}

const ToggleButton = ({
	className,
	menuOpen,
	setMenuOpen,
}: ToggleButtonProps) => {
	return (
		<button
			className={`${className} ${menuOpen ? 'open' : 'closed'}`}
			type='button'
			onClick={() => setMenuOpen(!menuOpen)}
			aria-label='Toggle menu'
		>
			{menuOpen ? (
				<FaTimes className='menu-toggle-button' />
			) : (
				<FaBars className='menu-toggle-button' />
			)}
		</button>
	)
}

export default ToggleButton
