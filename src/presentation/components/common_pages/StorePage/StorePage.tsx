import './StorePage.css'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { LuShoppingCart } from 'react-icons/lu'
import StoreSummary from '../../../../application/store_service/types/StoreSummary.interface'
import Store from '../../../../domain/Store/Store'
import useAppState from '../../../global_states/appState'
import useShoppingCartState from '../../../global_states/customer/shoppingCartState'
import NotFoundImage from '../../NotFoundImage/NotFoundImage'
import Skeleton from '../../Skeleton/Skeleton'
import ContentChanger from './ContentChanger/ContentChanger'
import StoreAbout from './StoreAbout/StoreAbout'
import DailySchedule from './StoreContactInformation/DailySchedule/DailySchedule'
import StoreContactInformation from './StoreContactInformation/StoreContactInformation'
import StoreProducts from './StoreProducts/StoreProducts'
import Modal from '../../Modal/Modal'
import StoreShoppingCart from '../../views/client/StoreShoppingCart/StoreShoppingCart'

type StorePageProps = {
	storeSummary: StoreSummary
}

const StorePage = ({ storeSummary }: StorePageProps) => {
	const { storeService } = useAppState()
	const { shoppingCarts } = useShoppingCartState()
	const [content, setContent] = useState<string>('products')
	const [showShoppingCart, setShowShoppingCart] = useState(false)

	const { data, isLoading } = useQuery<Store | undefined>({
		queryKey: ['storeData', storeSummary.id],
		queryFn: async () => await storeService.getStoreById(storeSummary.id),
		enabled: !!storeSummary.id,
	})

	return (
		<>
			<div className='store-page scrollbar'>
				{shoppingCarts.find(cart => cart.storeId === storeSummary.id) && (
					<div
						className='modal-close shopping-cart-button'
						onClick={() => setShowShoppingCart(true)}
					>
						<LuShoppingCart className='modal-close-icon ' />
					</div>
				)}
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

					<StoreContactInformation
						store={data}
						className={content !== 'about' ? 'hide' : ''}
					/>
				</div>
			</div>
			{showShoppingCart && (
				<Modal
					show={showShoppingCart}
					onClose={() => setShowShoppingCart(false)}
				>
					<StoreShoppingCart
						storeId={storeSummary.id}
						storeName={storeSummary.name}
					/>
				</Modal>
			)}
		</>
	)
}

export default StorePage
