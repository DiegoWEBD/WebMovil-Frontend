import './ExplorePage.css'

import { useEffect, useState } from 'react'
import { Finder } from '../../../../Finder/Finder'
import ExploreProducts from './ExploreProducts/ExploreProducts'
import ExploreStores from './ExploreStores/ExploreStores'
import ExploreFilters from './ExploreFilters/ExploreFilters'

const ExplorePage = () => {
	const [searchInput, setSearchInput] = useState<string>('')
	const [debouncedInput, setDebouncedInput] = useState<string>('')
	const [section, setSection] = useState<'stores' | 'products'>('products')

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedInput(searchInput)
		}, 500)

		return () => clearTimeout(timer)
	}, [searchInput])

	return (
		<div className=' page-padding'>
			<p className='page-title'>Explorar</p>
			<p className='page-subtitle'>
				Descubre productos o tiendas disponibles en tu vecindario
			</p>
			<div className='explore-page-header'>
				<Finder
					searchInput={searchInput}
					cbFunction={setSearchInput}
					placeholder='Nombre de la tienda o producto...'
				/>

				<ExploreFilters section={section} setSection={setSection} />
			</div>

			<div className='explore-page-content'>
				{section === 'stores' && <ExploreStores searchInput={debouncedInput} />}
				{section === 'products' && <ExploreProducts />}
			</div>
		</div>
	)
}

export default ExplorePage
