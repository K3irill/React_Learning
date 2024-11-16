import React from 'react'
import Greeting from './components/Greeting'
import AboutUseEffect from './hooks/about.useEffect'
import ControlledForm from './forms/controlledForm'
import TodoList from './forms/todoList'
import './App.css'
interface user {
	name: string
	age: number
	hobby: string[]
}
const App: React.FC = () => {
	const user: user = {
		name: 'Kail',
		age: 20,
		hobby: ['Programming', 'English', 'Self-development', 'home sports'],
	}
	return (
		<div>
			<h1>Application</h1>
			<Greeting name={user.name} age={user.age} hobby={user.hobby} />
			<AboutUseEffect />
			<br />
			<ControlledForm />
			<br />
			<TodoList></TodoList>
		</div>
	)
}

export default App
