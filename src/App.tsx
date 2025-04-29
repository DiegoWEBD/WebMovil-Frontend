import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginForm from './presentation/components/pages/AuthPage/LoginForm/LoginForm'
import RegisterForm from './presentation/components/pages/AuthPage/RegisterForm/RegisterForm'
import HomePage from './presentation/components/pages/HomePage/HomePage'
import Root from './presentation/components/pages/Root/Root'
import StoresPage from './presentation/components/pages/StoresPage/StoresPage'
import UserProtectedRoute from './presentation/components/protected_components/UserProtectedRoute'
import ProfilePage from './presentation/components/pages/ProfilePage/ProfilePage'
import StorePage from './presentation/components/pages/StorePage/StorePage'
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
