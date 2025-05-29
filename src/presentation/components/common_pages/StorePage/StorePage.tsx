import './StorePage.css'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
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
import Button from '../../buttons/Button/Button'

type StorePageProps = {
	storeSummary: StoreSummary
	closePage: () => void
}

const StorePage = ({ storeSummary, closePage }: StorePageProps) => {
	const { storeService } = useAppState()
	const [content, setContent] = useState<string>('products')

	const { data, isLoading } = useQuery<Store | undefined>({
		queryKey: ['storeData', storeSummary.id],
		queryFn: async () => await storeService.getStoreById(storeSummary.id),
		enabled: !!storeSummary.id,
	})

	return (
		<div className='store-page'>
			<Button onClick={closePage} className='back-link'>
				<FaArrowLeft className='back-icon' />
				<p>Volver a explorar</p>
			</Button>
			<div className='info-plus-contact'>
				<div className='info'>
					<NotFoundImage className='store-img' />
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

				<StoreContactInformation store={data} />
			</div>
		</div>
	)
}

export default StorePage
