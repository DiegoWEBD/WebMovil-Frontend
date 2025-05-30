import './StorePage.css'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import StoreSummary from '../../../../application/store_service/types/StoreSummary.interface'
import Store from '../../../../domain/Store/Store'
import useAppState from '../../../global_states/appState'
import NotFoundImage from '../../NotFoundImage/NotFoundImage'
import Skeleton from '../../Skeleton/Skeleton'
import ContentChanger from './ContentChanger/ContentChanger'
import StoreAbout from './StoreAbout/StoreAbout'
import DailySchedule from './StoreContactInformation/DailySchedule/DailySchedule'
import StoreContactInformation from './StoreContactInformation/StoreContactInformation'
import StoreProducts from './StoreProducts/StoreProducts'

type StorePageProps = {
	storeSummary: StoreSummary
}

const StorePage = ({ storeSummary }: StorePageProps) => {
	const { storeService } = useAppState()
	const [content, setContent] = useState<string>('products')

	const { data, isLoading } = useQuery<Store | undefined>({
		queryKey: ['storeData', storeSummary.id],
		queryFn: async () => await storeService.getStoreById(storeSummary.id),
		enabled: !!storeSummary.id,
	})

	return (
		<div className='store-page '>
			<div className='info-plus-contact'>
				<div className='info'>
					<NotFoundImage className='store-img' />
					<div className='info-container'>
						<div className='store-header'>
							<div>
								<h1 className='store-name'>{storeSummary.name}</h1>
								{isLoading ? (
									<Skeleton />
								) : (
									<p className='complete-store-description'>
										{data?.getDescription()}
									</p>
								)}
							</div>
							<DailySchedule store={data} compact />
						</div>

						<ContentChanger content={content} setContent={setContent} />
						{content === 'products' && (
							<StoreProducts storeId={storeSummary.id} />
						)}
						{content === 'about' && <StoreAbout store={data} />}
					</div>
				</div>
				<StoreContactInformation store={data} />
			</div>
		</div>
	)
}

export default StorePage
