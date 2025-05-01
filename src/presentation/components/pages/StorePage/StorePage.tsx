import './StorePage.css'

import { useQuery } from '@tanstack/react-query'
import { FaArrowLeft } from 'react-icons/fa6'
import { Link, useLocation, useParams } from 'react-router-dom'
import Store from '../../../../domain/Store/Store'
import { CONSTANTS } from '../../../../utils/constants'
import useAppState from '../../../global_states/appState'
import Skeleton from '../../Skeleton/Skeleton'
import StoreContactInformation from './StoreContactInformation/StoreContactInformation'
import StoreProducts from './StoreProducts/StoreProducts'
import ContentChanger from './ContentChanger/ContentChanger'
import { useState } from 'react'
import StoreAbout from './StoreAbout/StoreAbout'
import useDailySchedule from './StoreContactInformation/DailySchedule/hooks/useDailySchedule'

const StorePage = () => {
	const { name } = useParams()
	const { storeService } = useAppState()
	const location = useLocation()
	const [content, setContent] = useState<string>('products')

	const { data, isLoading } = useQuery<Store | undefined>({
		queryKey: ['storeData', location.state.storeId],
		queryFn: async () =>
			await storeService.getStoreById(location.state.storeId),
	})

	const { isOpenNow } = useDailySchedule(data?.getSchedules())

	return (
		<div className='store-page'>
			<Link to='/tiendas' className='back-link'>
				<FaArrowLeft className='back-icon' />
				<p>Volver a tiendas</p>
			</Link>
			<div className='info-plus-contact'>
				<div className='info'>
					<img
						src={`${CONSTANTS.API_URL}/stores_portraits/generic_store_portrait.png`}
						className='store-img'
					/>
					<div className='store-header'>
						<div>
							<h1 className='store-name'>{name}</h1>
							{isLoading ? (
								<Skeleton />
							) : (
								<p className='complete-store-description'>
									{data?.getDescription()}
								</p>
							)}
						</div>
						<p className={`store-open-state ${isOpenNow() ? '' : 'closed'}`}>
							{isOpenNow() ? 'Abierto ahora' : 'Cerrado'}
						</p>
					</div>

					<ContentChanger content={content} setContent={setContent} />
					{content === 'products' && (
						<StoreProducts storeId={location.state.storeId} />
					)}
					{content === 'about' && <StoreAbout store={data} />}
				</div>

				<StoreContactInformation store={data} />
			</div>
		</div>
	)
}

export default StorePage
