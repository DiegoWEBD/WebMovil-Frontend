import './OwnerStoreSelector.css'

import { useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { LuStore } from 'react-icons/lu'
import OwnerStoreSummary from '../../../../../application/owner_service/types/OwnerStoreSummary'
import useAppState from '../../../../global_states/appState'
import useOwnerState from '../../../../global_states/owner/ownerState'

const OwnerStoreSelector = () => {
	const { basicUserInfo } = useAppState()
	const { ownerService, selectedOwnerStoreSummary, setSelectedStoreSummary } =
		useOwnerState()
	const [openSelector, setOpenSelector] = useState(false)
	const selectorRef = useRef<HTMLDivElement>(null)

	const { data } = useQuery<OwnerStoreSummary[] | undefined>({
		queryKey: ['ownerStores', basicUserInfo?.email],
		queryFn: async () => {
			if (!basicUserInfo?.email) return undefined
			const stores = await ownerService.getOwnerStores(basicUserInfo.email)
			setSelectedStoreSummary(
				stores.length > 0
					? { name: stores[0].name, id: stores[0].id, isActive: true }
					: undefined
			)
			return stores
		},
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

	return (
		<>
			{openSelector && (
				<div className='overlay' onClick={() => setOpenSelector(false)} />
			)}
			<div ref={selectorRef} className='owner-store-selector'>
				<div
					className='owner-store-header'
					onClick={() => setOpenSelector(!openSelector)}
				>
					<LuStore className='selector-icon' />
					<p>{selectedOwnerStoreSummary?.name}</p>
					<IoIosArrowDown className='selector-arrow' />
				</div>
				{openSelector && (
					<div className='owner-store-selector-options'>
						{data?.map(store => (
							<div
								key={store.id}
								className='owner-store-selector-option'
								onClick={() => {
									setSelectedStoreSummary(store)
									setOpenSelector(false)
								}}
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
					</div>
				)}
			</div>
		</>
	)
}
export default OwnerStoreSelector
