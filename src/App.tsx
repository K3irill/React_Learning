import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Greeting from './components/Greeting'
import AboutUseState from './about-hooks/about.useState'
import AboutUseEffect from './about-hooks/about.useEffect'
import ControlledForm from './forms/controlledForm'
import TodoList from './forms/todoList'
import AboutUseRef from './about-hooks/about.useRef'
import AboutUseMemo from './about-hooks/about.useMemo'
import AboutUseCallback from './about-hooks/about.useCallback'
import { ThemeContext } from './about-hooks/about.useContext'

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
		<Router>
			<div
				style={{
					backgroundColor: theme === 'light' ? '#fff' : '#242424',
					color: theme === 'light' ? '#242424' : '#fff',
				}}
			>
				<h1>Application</h1>
				<nav>
					<ul
						style={{
							display: 'flex',
							listStyle: 'none',
							gap: '15px',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about-use-state'>useState</Link>
						</li>
						<li>
							<Link to='/about-use-effect'>useEffect</Link>
						</li>
						<li>
							<Link to='/about-use-ref'>useRef</Link>
						</li>
						<li>
							<Link to='/about-use-memo'>useMemo</Link>
						</li>
						<li>
							<Link to='/about-use-callback'>useCallback</Link>
						</li>
						<li>
							<Link to='/controlled-form'>controlled From</Link>
						</li>
						<li>
							<Link to='/todo-list'>todoList</Link>
						</li>
					</ul>
				</nav>
				<button onClick={toggleTheme}>Toggle Theme</button>

				<Routes>
					<Route
						path='/'
						element={
							<Greeting name={user.name} age={user.age} hobby={user.hobby} />
						}
					></Route>
					<Route path='/about-use-state' element={<AboutUseState />}></Route>
					<Route path='/about-use-effect' element={<AboutUseEffect />}></Route>
					<Route path='/about-use-ref' element={<AboutUseRef />}></Route>
					<Route path='/about-use-memo' element={<AboutUseMemo />}></Route>
					<Route
						path='/about-use-callback'
						element={<AboutUseCallback />}
					></Route>
					<Route path='/controlled-form' element={<ControlledForm />}></Route>
					<Route path='/todo-list' element={<TodoList />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
