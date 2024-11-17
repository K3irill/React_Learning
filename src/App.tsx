import React, { useContext } from 'react'
import Greeting from './components/Greeting'
import AboutUseState from './hooks/about.useState'
import AboutUseEffect from './hooks/about.useEffect'
import ControlledForm from './forms/controlledForm'
import TodoList from './forms/todoList'
import AboutUseRef from './hooks/about.useRef'
import AboutUseMemo from './hooks/about.useMemo'
import AboutUseCallback from './hooks/about.useCallback'
import { ThemeContext } from './hooks/about.useContext'

import './App.css'
interface user {
	name: string
	age: number
	hobby: string[]
}
const App: React.FC = () => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error(
			'ThemeConsumerComponent must be used within a ThemeProvider'
		)
	}
	const { theme, toggleTheme } = context

	const user: user = {
		name: 'Kail',
		age: 20,
		hobby: ['Programming', 'English', 'Self-development', 'home sports'],
	}
	return (
		<div
			style={{
				backgroundColor: theme === 'light' ? '#fff' : '#242424',
				color: theme === 'light' ? '#242424' : '#fff',
			}}
		>
			<h1>Application</h1>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<Greeting name={user.name} age={user.age} hobby={user.hobby} />
			<AboutUseState />
			<AboutUseEffect />
			<br />
			<ControlledForm />
			<br />
			<TodoList></TodoList>
			<br />
			<AboutUseRef></AboutUseRef>
			<br />
			<AboutUseMemo />
			<br />
			<AboutUseCallback />
		</div>
	)
}

export default App
