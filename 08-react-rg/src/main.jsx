import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.css'
import Home from './components/screens/home/Home.jsx'
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Home />
	</StrictMode>
)
