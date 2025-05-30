import { ReactNode } from 'react'
import Card from '../containers/Card/Card'
import './Modal.css'
import ModalHeader from './ModalHeader/ModalHeader'

type ModalProps = {
	show: boolean
	onClose: () => void
	children: ReactNode
}

const Modal = ({ show, onClose, children }: ModalProps) => {
	return (
		<div className={`modal-overlay ${show ? 'show' : ''}`} onClick={onClose}>
			<Card className='modal-content' onClick={e => e.stopPropagation()}>
				<ModalHeader onClose={onClose} />
				{children}
			</Card>
		</div>
	)
}

export default Modal
