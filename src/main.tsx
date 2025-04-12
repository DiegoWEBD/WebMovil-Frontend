import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ENV_VARIABLES } from './utils/env_variables.ts'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<GoogleOAuthProvider clientId={ENV_VARIABLES.GOOGLE_CLIENT_ID}>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</GoogleOAuthProvider>
)
