import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginForm from './presentation/components/common_pages/AuthPage/LoginForm/LoginForm'
import RegisterForm from './presentation/components/common_pages/AuthPage/RegisterForm/RegisterForm'
import HomePage from './presentation/components/common_pages/HomePage/HomePage'
import Root from './presentation/components/common_pages/Root/Root'
import StoresPage from './presentation/components/common_pages/StoresPage/StoresPage'
import UserProtectedRoute from './presentation/components/protected_components/UserProtectedRoute'
import ProfilePage from './presentation/components/common_pages/ProfilePage/ProfilePage'
import StorePage from './presentation/components/common_pages/StorePage/StorePage'
import UserReverseProtectedRoute from './presentation/components/protected_components/UserReverseProtectedRoute'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: 'tiendas',
				element: (
					<UserProtectedRoute>
						<StoresPage />
					</UserProtectedRoute>
				),
			},
			{
				path: 'tiendas/:name',
				element: (
					<UserProtectedRoute>
						<StorePage />
					</UserProtectedRoute>
				),
			},
			{
				path: 'perfil',
				element: (
					<h1>
						<UserProtectedRoute>
							<ProfilePage />
						</UserProtectedRoute>
					</h1>
				),
			},
			{
				path: 'login',
				element: (
					<UserReverseProtectedRoute>
						{' '}
						<LoginForm />
					</UserReverseProtectedRoute>
				),
			},
			{
				path: 'register',
				element: (
					<UserReverseProtectedRoute>
						<RegisterForm />
					</UserReverseProtectedRoute>
				),
			},
		],
	},
])

const App = () => <RouterProvider router={router} />

export default App
