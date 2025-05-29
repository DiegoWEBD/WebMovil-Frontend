import './ExploreFilters.css'

type ExploreFiltersProps = {
	section: 'stores' | 'products'
	setSection: (section: 'stores' | 'products') => void
}

const ExploreFilters = ({ section, setSection }: ExploreFiltersProps) => {
	return (
		<div className='explore-filters'>
			<button
				className={`explore-filter-button ${
					section === 'stores' ? 'active' : ''
				}`}
				onClick={() => setSection('stores')}
			>
				Tiendas
			</button>
			<button
				className={`explore-filter-button ${
					section === 'products' ? 'active' : ''
				}`}
				onClick={() => setSection('products')}
			>
				Productos
			</button>
		</div>
	)
}

export default ExploreFilters
