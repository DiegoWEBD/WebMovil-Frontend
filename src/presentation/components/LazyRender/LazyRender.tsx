import './LazyRender.css'

import { useEffect, useRef, useState, ReactNode } from 'react'

type LazyRenderProps = {
	children: ReactNode | (() => ReactNode)
	root?: Element | null
	className?: string
}

const LazyRender = ({ children, root = null, className }: LazyRenderProps) => {
	const ref = useRef<HTMLDivElement>(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{
				root,
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px',
			}
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => observer.disconnect()
	}, [root])

	return (
		<div ref={ref} className={`lazy-render ${className}`}>
			{isVisible
				? typeof children === 'function'
					? children()
					: children
				: null}
		</div>
	)
}

export default LazyRender
