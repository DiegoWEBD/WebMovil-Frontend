import './OwnerStoreSelector.css'

import { useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { LuStore } from 'react-icons/lu'
import OwnerStoreSummary from '../../../../../application/owner_service/types/OwnerStoreSummary'
import useAppState from '../../../../global_states/appState'
import useModalState from '../../../../global_states/modalState'
import useOwnerState from '../../../../global_states/owner/ownerState'

const OwnerStoreSelector = () => {
	const { basicUserInfo } = useAppState()
	const { ownerService, selectedOwnerStoreSummary, setSelectedStoreSummary } =
		useOwnerState()
	const { openModal } = useModalState()
	const [openSelector, setOpenSelector] = useState(false)
	const selectorRef = useRef<HTMLDivElement>(null)

	const { data } = useQuery<OwnerStoreSummary[] | undefined>({
		queryKey: ['ownerStores', basicUserInfo],
		queryFn: async () => {
			const stores = await ownerService.getOwnerStores(basicUserInfo!.email)
			if (!stores) setSelectedStoreSummary(undefined)

			if (!localStorage.getItem('owner_selected_store_id')) {
				localStorage.setItem('owner_selected_store_id', stores[0].id)
				localStorage.setItem('owner_selected_store_name', stores[0].name)
				localStorage.setItem(
					'owner_selected_store_is_active',
					String(stores[0].isActive)
				)
				setSelectedStoreSummary(
					stores.length > 0
						? { name: stores[0].name, id: stores[0].id, isActive: true }
						: undefined
				)
			}

			return stores
		},
		enabled: !!basicUserInfo,
	})

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectorRef.current &&
				!selectorRef.current.contains(event.target as Node)
			) {
				setOpenSelector(false)
			}
		}
		if (openSelector) {
			document.addEventListener('mousedown', handleClickOutside)
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [openSelector])

	const selectOwnerStoreSummary = (ownerStoreSummary: OwnerStoreSummary) => {
		setSelectedStoreSummary(ownerStoreSummary)
		setOpenSelector(false)
		localStorage.setItem('owner_selected_store_id', ownerStoreSummary.id)
		localStorage.setItem('owner_selected_store_name', ownerStoreSummary.name)
		localStorage.setItem(
			'owner_selected_store_is_active',
			String(ownerStoreSummary.isActive)
		)
	}

	return (
		<div ref={selectorRef} className='owner-store-selector'>
			<div
				className='owner-store-header'
				onClick={() =>
					openModal(
						<>
							<h3>Mis Tiendas</h3>
							{data?.map(store => (
								<div
									key={store.id}
									className='owner-store-selector-option'
									onClick={() => selectOwnerStoreSummary(store)}
								>
									<p>{store.name}</p>
									<p
										className={`owner-store-state ${
											store.isActive ? 'active-owner-store' : ''
										}`}
									>
										{store.isActive ? 'Activa' : 'Inactiva'}
									</p>
								</div>
							))}
						</>
					)
				}
			>
				<LuStore className='selector-icon' />
				<p>{selectedOwnerStoreSummary?.name}</p>
				<IoIosArrowDown className='selector-arrow' />
			</div>
		</div>
	)
}
export default OwnerStoreSelector
