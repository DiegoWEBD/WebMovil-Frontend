import './ModalHeader.css'

type ModalHeaderProps = {
	onClose: () => void
}

const ModalHeader = ({ onClose }: ModalHeaderProps) => {
	return (
		<header className='modal-header'>
			<button className='modal-close' onClick={onClose}>
				&times;
			</button>
		</header>
	)
}

export default ModalHeader
