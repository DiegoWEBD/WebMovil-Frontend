import { IoMdClose } from 'react-icons/io'
import './ModalHeader.css'

type ModalHeaderProps = {
	onClose: () => void
}

const ModalHeader = ({ onClose }: ModalHeaderProps) => {
	return (
		<header className='modal-header'>
			<div className='modal-close'>
				<IoMdClose className='modal-close-icon' onClick={onClose} />
			</div>
		</header>
	)
}

export default ModalHeader
