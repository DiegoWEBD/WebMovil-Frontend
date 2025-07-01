import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

// Lazy imports for pages
const LoginForm = lazy(
	() =>
		import(
			'./presentation/components/common_pages/AuthPage/LoginForm/LoginForm'
		)
)
const RegisterForm = lazy(
	() =>
		import(
			'./presentation/components/common_pages/AuthPage/RegisterForm/RegisterForm'
		)
)
const HomePage = lazy(
	() => import('./presentation/components/common_pages/HomePage/HomePage')
)
const ProfilePage = lazy(
	() => import('./presentation/components/common_pages/ProfilePage/ProfilePage')
)
const Root = lazy(
	() => import('./presentation/components/common_pages/Root/Root')
)

const OrdersPage = lazy(
	() =>
		import('./presentation/components/views/client/pages/OrdersPage/OrdersPage')
)

const ExplorePage = lazy(
	() =>
		import(
			'./presentation/components/views/client/pages/ExplorePage/ExplorePage'
		)
)

const OwnerProductsPage = lazy(
	() =>
		import(
			'./presentation/components/views/owner/pages/OwnerProductsPage/OwnerProductsPage'
		)
)
const OwnerStoreProfilePage = lazy(
	() =>
		import(
			'./presentation/components/views/owner/pages/OwnerStoreProfilePage/OwnerStoreProfilePage'
		)
)
const OwnerSalesPage = lazy(
	() =>
		import(
			'./presentation/components/views/owner/pages/OwnerSalesPage/OwnerSalesPage'
		)
)

const DeliveryRequestsPage = lazy(
	() =>
		import(
			'./presentation/components/views/delivery_man/pages/DeliveryRequestsPage/DeliveryRequestsPage'
		)
)

const UserProtectedRoute = lazy(
	() =>
		import('./presentation/components/protected_components/UserProtectedRoute')
)
const UserReverseProtectedRoute = lazy(
	() =>
		import(
			'./presentation/components/protected_components/UserReverseProtectedRoute'
		)
)
const OwnerProtectedRoute = lazy(
	() =>
		import(
			'./presentation/components/protected_components/owner/OwnerProtectedRoute'
		)
)
const DeliveryManProtectedRoute = lazy(
	() =>
		import(
			'./presentation/components/protected_components/delivery_man/DeliveryManProtectedRoute'
		)
)

const ClientProtectedRoute = lazy(
	() =>
		import(
			'./presentation/components/protected_components/client/ClientProtectedRoute'
		)
)

// Fallback component while loading
const Loading = () => <div>Cargando...</div>

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Suspense fallback={<Loading />}>
				<Root />
			</Suspense>
		),
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<Loading />}>
						<HomePage />
					</Suspense>
				),
			},

			{
				path: 'perfil',
				element: (
					<Suspense fallback={<Loading />}>
						<UserProtectedRoute>
							<ProfilePage />
						</UserProtectedRoute>
					</Suspense>
				),
			},
			{
				path: 'locatario/productos',
				element: (
					<Suspense fallback={<Loading />}>
						<OwnerProtectedRoute>
							<OwnerProductsPage />
						</OwnerProtectedRoute>
					</Suspense>
				),
			},
			{
				path: 'locatario/tienda',
				element: (
					<Suspense fallback={<Loading />}>
						<OwnerProtectedRoute>
							<OwnerStoreProfilePage />
						</OwnerProtectedRoute>
					</Suspense>
				),
			},
			{
				path: 'locatario/ventas',
				element: (
					<Suspense fallback={<Loading />}>
						<OwnerProtectedRoute>
							<OwnerSalesPage />
						</OwnerProtectedRoute>
					</Suspense>
				),
			},
			{
				path: 'pedidos',
				element: (
					<Suspense fallback={<Loading />}>
						<ClientProtectedRoute>
							<OrdersPage />
						</ClientProtectedRoute>
					</Suspense>
				),
			},
			{
				path: 'explorar',
				element: (
					<Suspense fallback={<Loading />}>
						<ClientProtectedRoute>
							<ExplorePage />
						</ClientProtectedRoute>
					</Suspense>
				),
			},
			{
				path: 'delivery-man/deliveries',
				element: (
					<Suspense fallback={<Loading />}>
						<DeliveryManProtectedRoute>
							<DeliveryRequestsPage />
						</DeliveryManProtectedRoute>
					</Suspense>
				),
			},
			{
				path: 'login',
				element: (
					<Suspense fallback={<Loading />}>
						<UserReverseProtectedRoute>
							<LoginForm />
						</UserReverseProtectedRoute>
					</Suspense>
				),
			},
			{
				path: 'register',
				element: (
					<Suspense fallback={<Loading />}>
						<UserReverseProtectedRoute>
							<RegisterForm />
						</UserReverseProtectedRoute>
					</Suspense>
				),
			},
		],
	},
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
