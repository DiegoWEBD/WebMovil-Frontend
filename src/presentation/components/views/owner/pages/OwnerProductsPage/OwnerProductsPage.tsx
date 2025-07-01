import './OwnerProductsPage.css'

import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import apiClient from '../../../../../../utils/axios_client'
import OwnerProductsCard from './OwnerProductsCard/OwnerProductsCard'
import useOwnerState from '../../../../../global_states/owner/ownerState'
import Card from '../../../../containers/Card/Card'
import Button from '../../../../buttons/Button/Button'

const OwnerProductsPage = () => {
	const queryClient = useQueryClient()
	const { selectedOwnerStoreSummary } = useOwnerState()

	// Form state
	const [form, setForm] = useState({
		code: '',
		name: '',
		description: '',
		price: '',
		picture: '',
		stock: '',
	})
	const [submitting, setSubmitting] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setForm(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setSubmitting(true)
		setError(null)
		try {
			const payload = {
				code: form.code,
				name: form.name,
				description: form.description,
				price: parseFloat(form.price),
				picture: form.picture,
				stock: parseInt(form.stock, 10),
				store_id: selectedOwnerStoreSummary!.id,
				store_name: selectedOwnerStoreSummary!.name,
			}
			await apiClient.post('/stock', payload)
			setForm({
				code: '',
				name: '',
				description: '',
				price: '',
				picture: '',
				stock: '',
			})
			queryClient.invalidateQueries({
				queryKey: ['owner-store-products', selectedOwnerStoreSummary!.id],
			})
		} catch (err) {
			if (
				err &&
				typeof err === 'object' &&
				'response' in err &&
				err.response &&
				typeof err.response === 'object' &&
				'data' in err.response
			) {
				// @ts-expect-error: error object may not have response property, but we want to access it for error messaging
				setError(err.response.data?.message || 'Error al registrar el producto')
			} else {
				setError('Error al registrar el producto')
			}
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<>
			<div className='owner-products-page page-padding'>
				<p className='page-title'>Productos</p>
				<Card className='register-product-form-card'>
					<h3>Registrar nuevo producto</h3>
					<form className='owner-product-form' onSubmit={handleSubmit}>
						<div className='form-fields'>
							<input
								name='code'
								placeholder='Código'
								value={form.code}
								onChange={handleChange}
								required
							/>
							<input
								name='name'
								placeholder='Nombre'
								value={form.name}
								onChange={handleChange}
								required
							/>
							<input
								name='price'
								type='number'
								placeholder='Precio'
								value={form.price}
								onChange={handleChange}
								required
								min='0'
								step='0.01'
							/>
							<input
								name='stock'
								type='number'
								placeholder='Stock'
								value={form.stock}
								onChange={handleChange}
								required
								min='0'
								step='1'
							/>
						</div>
						<textarea
							name='description'
							placeholder='Descripción'
							value={form.description}
							onChange={handleChange}
							required
						/>
						<Button
							type='submit'
							disabled={submitting}
							className='register-product-button primary'
						>
							{submitting ? 'Registrando...' : 'Registrar producto'}
						</Button>
						{error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
					</form>
				</Card>
				<OwnerProductsCard />
			</div>
		</>
	)
}

export default OwnerProductsPage
