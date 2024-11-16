import React, { useState } from 'react'
interface Todo {
	id: number
	text: string
	isEditing: boolean
}
const TodoList = () => {
	const [todos, setTodos] = useState<Todo[]>([])
	const [newTodo, setNewTodo] = useState<string>('')
	const [edit, setEdit] = useState<string>('')
	const [error, setError] = useState<string | null>(null)
	const [isEditing, setIsEditing] = useState<boolean>(false)

	const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value)
	}
	const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEdit(e.target.value)
	}
	const handleAddTask = () => {
		if (newTodo.trim()) {
			const task = {
				id: Date.now(),
				text: newTodo,
				isEditing: false,
			}
			setTodos([...todos, task])
			setNewTodo('')
			setError(null)
			return
		} else {
			setError('Введите название задачи')
		}
	}
	const handleDeleteTask = (id: number) => {
		const newArr = todos.filter(task => task.id !== id)
		setTodos(newArr)
	}

	const handleEditTask = (id: number) => {
		setTodos(
			todos.map(task =>
				task.id === id ? { ...task, isEditing: !task.isEditing } : task
			)
		)
	}
	const handleSaveEdit = (id: number) => {
		if (edit.trim()) {
			setTodos(
				todos.map(task =>
					task.id === id ? { ...task, text: edit, isEditing: false } : task
				)
			)
			setEdit('')
		}
	}
	return (
		<div>
			<h1>Список задач</h1>
			<input
				onChange={handleNewTodoChange}
				value={newTodo}
				type='text'
				placeholder='Введите задачу'
			/>
			<button onClick={handleAddTask}>Добавить задачу</button>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<ul>
				{todos.map(task => (
					<li key={task.id}>
						{task.isEditing ? (
							<div>
								<input
									type='text'
									value={edit}
									onChange={handleEditChange}
									placeholder='Введите новый текст задачи'
								/>
								<button onClick={() => handleSaveEdit(task.id)}>
									Сохранить
								</button>
								<button onClick={() => handleEditTask(task.id)}>Отмена</button>
							</div>
						) : (
							<>
								<p>{task.text}</p>
								<button onClick={() => handleDeleteTask(task.id)}>
									Удалить задачу
								</button>
								<button onClick={() => handleEditTask(task.id)}>
									Редактировать задачу
								</button>
							</>
						)}
					</li>
				))}
			</ul>
		</div>
	)
}

export default TodoList
