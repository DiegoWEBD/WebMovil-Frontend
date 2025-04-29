import './Card.css'
import { ReactNode } from 'react'

type CardProps = {
	children: ReactNode
	className?: string
}

const Card = ({ children, className }: CardProps) => {
	return <div className={`${className} card`}>{children}</div>
}

export default Card
