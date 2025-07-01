import './SalesFilter.css'

export type SaleStatus =
	| 'Completada'
	| 'En camino'
	| 'Pendiente'
	| 'Lista para retiro'

type SalesFilterProps = {
	selectedStatus: SaleStatus | 'Todas'
	onStatusChange: (status: SaleStatus | 'Todas') => void
}

const SalesFilter = ({ selectedStatus, onStatusChange }: SalesFilterProps) => {
	const statusOptions: (SaleStatus | 'Todas')[] = [
		'Todas',
		'Completada',
		'En camino',
		'Pendiente',
		'Lista para retiro',
	]

	return (
		<div className='sales-filter'>
			<div className='filter-buttons'>
				{statusOptions.map(status => (
					<button
						key={status}
						className={`filter-button ${
							selectedStatus === status ? 'active' : ''
						}`}
						onClick={() => onStatusChange(status)}
					>
						{status}
					</button>
				))}
			</div>
		</div>
	)
}

export default SalesFilter
