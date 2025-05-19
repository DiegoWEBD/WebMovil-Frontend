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
const StorePage = lazy(
	() => import('./presentation/components/common_pages/StorePage/StorePage')
)
const StoresPage = lazy(
	() => import('./presentation/components/common_pages/StoresPage/StoresPage')
)

const OwnerProductsPage = lazy(
	() =>
		import(
			'./presentation/components/views/OwnerView/pages/OwnerProductsPage/OwnerProductsPage'
		)
)
const OwnerStoreProfilePage = lazy(
	() =>
		import(
			'./presentation/components/views/OwnerView/pages/OwnerStoreProfilePage/OwnerStoreProfilePage'
		)
)
const OwnerSalesPage = lazy(
	() =>
		import(
			'./presentation/components/views/OwnerView/pages/OwnerSalesPage/OwnerSalesPage'
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
				path: 'tiendas',
				element: (
					<Suspense fallback={<Loading />}>
						<UserProtectedRoute>
							<StoresPage />
						</UserProtectedRoute>
					</Suspense>
				),
			},
			{
				path: 'tiendas/:name',
				element: (
					<Suspense fallback={<Loading />}>
						<UserProtectedRoute>
							<StorePage />
						</UserProtectedRoute>
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
