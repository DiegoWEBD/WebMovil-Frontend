import './App.css'
import { Suspense, lazy, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import useAppState from './presentation/global_states/appState'

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
	const { validateAccessToken } = useAppState()
	useEffect(() => {
		localStorage.setItem(
			'access_token',
			'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY2MGVmM2I5Nzg0YmRmNTZlYmU4NTlmNTc3ZjdmYjJlOGMxY2VmZmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3NDk3MjU1NTE2NzctaTU4aHZlZzllNTVtZXYwbzAyajRhdThyazkxZ3U0N20uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3NDk3MjU1NTE2NzctaTU4aHZlZzllNTVtZXYwbzAyajRhdThyazkxZ3U0N20uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTU0Mjk0NDU4MDg4NDExNTM2NDciLCJlbWFpbCI6ImRpZWdvLm1hbGRvbmFkby4xYWxzZkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzQ3NjMwMTQ5LCJuYW1lIjoiRGllZ28gTWFsZG9uYWRvIFphbW9yYW5vIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0ppUVZJQWU0clFld2kwT196dmNZR1pzUHRhZEpXaGN5d3p2TjVhaG4yMUlvNmliZz1zOTYtYyIsImdpdmVuX25hbWUiOiJEaWVnbyBNYWxkb25hZG8gWmFtb3Jhbm8iLCJpYXQiOjE3NDc2MzA0NDksImV4cCI6MTc0NzYzNDA0OSwianRpIjoiMTExZWVlMjRmMDhhOTM5MzViYTYxNzc4NWJiMjIyZDRlYWViNGM2MyJ9.gVFg8qDlw1EeBhgnhulXL1wYEvkPIJEtEyznSZmSiTtAhb2Qtj28DLgpCH93YVBE7MprlOjzDEffGEG0ucAB4I8bckiT0RkENUZ2qVLtP0cl2hOKVytR0U8vkg3byMQphn24qB_fmpcmheT0fgdDlEr0K3PadIS6gSUQW1UA24WyJY-9L2eCz4bBWkCFTVsNRdZe6m2_b_RlVRw9e7xSWfXm7jF4-dmCbChur-OISVqB5GGO4F0m4MDdhpUX3gnCRkZCDLbXfHlbfaAl-5zNV2TbT689JbnNrF6vg0BKdqCe8Oy_q6jU_Z5_YHfjZzYzWWsU-eR0SQP8yNQOaTKl2g'
		)
		localStorage.setItem('user_type', 'owner')
		localStorage.setItem('user_email', 'diego.maldonado.1alsf@gmail.com')
		validateAccessToken()
	}, [validateAccessToken])

	return <RouterProvider router={router} />
}

export default App
