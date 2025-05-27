import './Finder.css'
import { useEffect } from 'react'

type FinderProps = {
	searchInput: string
	placeholder?: string
	cbFunction: (query: string) => void
}

export function Finder({
	searchInput,
	cbFunction,
	placeholder = 'Buscar en MiBarrio',
}: FinderProps) {
	useEffect(() => {
		if (!searchInput) return

		const timeout = setTimeout(() => {
			cbFunction(searchInput)
		}, 500)

		return () => clearTimeout(timeout)
	}, [searchInput, cbFunction])

	return (
		<input
			className='finder-input'
			type='text'
			placeholder={placeholder}
			value={searchInput}
			onChange={e => cbFunction(e.target.value)}
		/>
	)
}
