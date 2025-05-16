import './Card.css'
import { MouseEvent, ReactNode } from 'react'

type CardProps = {
	children?: ReactNode
	className?: string
	onClick?: (event: MouseEvent) => void
}

const Card = ({ children, className, onClick }: CardProps) => {
	return (
		<div className={`${className} card`} onClick={onClick}>
			{children}
		</div>
	)
}

export default Card
