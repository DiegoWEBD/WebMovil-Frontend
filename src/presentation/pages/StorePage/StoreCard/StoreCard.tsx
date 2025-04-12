import './StoreCard.css'
import Store from '../../../../domain/Store/Store'

type StoreCardProps = {
	store: Store
}

const StoreCard = ({ store }: StoreCardProps) => {
	return (
		<div className='store-card'>
			<h2>{store.getName()}</h2>
			<p>{store.getDescription()}</p>
			<p>Dirección: {store.getDirection()}</p>
			<p>Teléfono: {store.getPhone()}</p>
			<p>Propietarios: {store.getOwnersEmails().join(', ')}</p>
		</div>
	)
}

export default StoreCard
