import './StoresPage.css'

import { useEffect, useState } from 'react'
import { Finder } from '../../Finder/Finder'
import StoresViewer from './StoresViewer/StoresViewer'

const StorePage = () => {
	const [searchInput, setSearchInput] = useState<string>('')
	const [debouncedInput, setDebouncedInput] = useState<string>('')

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedInput(searchInput)
		}, 500)

		return () => clearTimeout(timer)
	}, [searchInput])

	return (
		<div className='stores-page'>
			<div className='page-title-container'>
				<h1 className='page-title'>Tiendas</h1>
				<p className='page-subtitle'>Descubre las tiendas de tu vecindario</p>
				<Finder searchInput={searchInput} cbFunction={setSearchInput} />
			</div>

			<StoresViewer input={debouncedInput} />
		</div>
	)
}

export default StorePage
