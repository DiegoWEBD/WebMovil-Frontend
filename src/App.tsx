import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginForm from './presentation/components/pages/AuthPage/LoginForm/LoginForm'
import RegisterForm from './presentation/components/pages/AuthPage/RegisterForm/RegisterForm'
import HomePage from './presentation/components/pages/HomePage/HomePage'
import Root from './presentation/components/pages/Root/Root'
import StorePage from './presentation/components/pages/StorePage/StorePage'

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
				element: <StorePage />,
			},
			{
				path: 'perfil',
				element: <h1>Perfil</h1>,
			},
			{
				path: 'login',
				element: <LoginForm />,
			},
			{
				path: 'register',
				element: <RegisterForm />,
			},
		],
	},
])

const App = () => <RouterProvider router={router} />

export default App
