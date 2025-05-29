import { useEffect } from 'react'
import { ReactNode } from 'react'
import './Modal.css'
import Card from '../containers/Card/Card'

type ModalProps = {
	show: boolean
	onClose: () => void
	hideCloseButton?: boolean
	children: ReactNode
}

const Modal = ({ show, onClose, children, hideCloseButton }: ModalProps) => {
	useEffect(() => {
		if (show) {
			document.body.classList.add('modal-open')
		} else {
			document.body.classList.remove('modal-open')
		}
		return () => {
			document.body.classList.remove('modal-open')
		}
	}, [show])

	return (
		<div className={`modal-overlay ${show ? 'show' : ''}`} onClick={onClose}>
			<Card className='modal-content' onClick={e => e.stopPropagation()}>
				{hideCloseButton && (
					<button className='modal-close' onClick={onClose}>
						&times;
					</button>
				)}
				{children}
			</Card>
		</div>
	)
}

export default Modal
