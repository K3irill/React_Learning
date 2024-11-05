import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.css'
import Home from './components/screens/home/Home.jsx'
import { Router } from './components/ui/Router.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AuthProvider>
			<Router />
		</AuthProvider>
	</StrictMode>
)
