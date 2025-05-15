import './OwnerStoreGeneralCard.css'

import Store from '../../../../../../../domain/Store/Store'
import Card from '../../../../../containers/Card/Card'
import { Field, Form, Formik } from 'formik'

type OwnerStoreGeneralCardProps = {
	store: Store | undefined
}

const OwnerStoreGeneralCard = ({ store }: OwnerStoreGeneralCardProps) => {
	return (
		<Formik
			initialValues={{
				name: store?.getName() || '',
				description: store?.getDescription() || '',
				direction: store?.getDirection() || '',
				phone: store?.getPhone() || '',
				about: store?.getAbout() || '',
				email: store?.getEmail() || '',
			}}
			enableReinitialize={true}
			onSubmit={values => {
				console.log('Submitted values:', values)
			}}
		>
			<Form>
				<Card className='owner-store-general-card'>
					<h3>Información General</h3>
					<div className='splitted-section'>
						<div className='owner-store-data'>
							<label>Nombre de la tienda</label>
							<Field
								name='name'
								type='text'
								className='owner-store-data-field'
							/>
						</div>

						<div className='owner-store-data'>
							<label>Dirección</label>
							<Field
								name='direction'
								type='text'
								className='owner-store-data-field'
							/>
						</div>

						<div className='owner-store-data'>
							<label>Teléfono</label>
							<Field
								name='phone'
								type='text'
								className='owner-store-data-field'
							/>
						</div>

						<div className='owner-store-data'>
							<label>Email</label>
							<Field
								name='email'
								type='text'
								className='owner-store-data-field'
							/>
						</div>

						<div className='owner-store-data'>
							<label>Descripción</label>
							<Field
								name='description'
								type='text'
								as='textarea'
								className='owner-store-data-field'
							/>
						</div>
					</div>

					<div className='owner-store-data'>
						<label>Acerca de nosotros</label>
						<Field
							name='about'
							type='text'
							as='textarea'
							className='owner-store-data-field'
						/>
					</div>
				</Card>
			</Form>
		</Formik>
	)
}

export default OwnerStoreGeneralCard
