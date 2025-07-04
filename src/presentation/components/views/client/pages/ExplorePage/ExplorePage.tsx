import './ExplorePage.css'

import { useEffect, useState } from 'react'
import { Finder } from '../../../../Finder/Finder'
import ExploreProducts from './ExploreProducts/ExploreProducts'
import ExploreStores from './ExploreStores/ExploreStores'
import ExploreFilters from './ExploreFilters/ExploreFilters'

const ExplorePage = () => {
	const [searchInput, setSearchInput] = useState<string>('')
	const [debouncedInput, setDebouncedInput] = useState<string>('')
	const [section, setSection] = useState<'stores' | 'products' | 'all'>(
		'stores'
	)

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedInput(searchInput)
		}, 500)

		return () => clearTimeout(timer)
	}, [searchInput])

	return (
		<div className='explore-page'>
			<div className='page-padding'>
				<p className='page-title'>Explorar</p>
				<p className='page-subtitle'>
					Descubre productos o tiendas disponibles en tu vecindario
				</p>
			</div>

			<div className='explore-page-header page-padding'>
				<Finder
					searchInput={searchInput}
					cbFunction={setSearchInput}
					placeholder='Nombre de la tienda o producto...'
				/>

				<ExploreFilters section={section} setSection={setSection} />
			</div>

			<div className='explore-page-content page-padding'>
				{section === 'stores' && <ExploreStores searchInput={debouncedInput} />}
				{section === 'products' && (
					<ExploreProducts searchInput={debouncedInput} />
				)}
			</div>
		</div>
	)
}

export default ExplorePage
