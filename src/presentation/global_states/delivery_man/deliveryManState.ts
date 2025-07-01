import { create } from 'zustand'
import IDeliveryService from '../../../application/delivery_service/IDeliveryService.interface'
import DeliveryService from '../../../application/delivery_service/DeliveryService'

type DeliveryManState = {
	deliveryService: IDeliveryService
}

const useDeliveryManState = create<DeliveryManState>(() => ({
	deliveryService: new DeliveryService(),
}))

export default useDeliveryManState
