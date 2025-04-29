import './Finder.css'
import { useEffect } from 'react'

type FinderProps = {
	searchInput: string
	cbFunction: (query: string) => void
}

export function Finder({ searchInput, cbFunction }: FinderProps) {
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
			placeholder='Buscar tiendas...'
			value={searchInput}
			onChange={e => cbFunction(e.target.value)}
		/>
	)
}
