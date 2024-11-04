import React from 'react'
import { useState } from 'react'
import './index.scss'
import Modal from './Modal'
function App() {
	const [display, setDisplay] = useState(false)

	return (
		<div className='App'>
			<button onClick={() => setDisplay(true)} className='open-modal-btn'>
				✨ Открыть окно
			</button>
			<Modal display={display} setDisplay={setDisplay} />
		</div>
	)
}

export default App
