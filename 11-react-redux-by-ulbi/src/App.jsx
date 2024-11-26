import { useState } from 'react'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {
	addCustomerAction,
	removeCustomerAction,
} from './store/customersReducer'

function App() {
	const [amount, setAmount] = useState('')
	const dispatch = useDispatch()
	const cash = useSelector(state => state.cash.cash)
	const customers = useSelector(state => state.customers.customers)

	const addCash = () => {
		const value = parseInt(amount, 10)

		if (!isNaN(value)) {
			dispatch({ type: 'ADD_CASH', payload: value })
			setAmount('')
		}
	}

	const getCash = () => {
		const value = parseInt(amount, 10)
		if (cash < 100) return
		if (!isNaN(value)) {
			dispatch({ type: 'GET_CASH', payload: value })
			setAmount('')
		}
	}

	const addCustomer = name => {
		const customer = {
			name,
			id: Date.now(),
		}
		dispatch(addCustomerAction(customer))
	}
	const removeCustomer = customer => {
		dispatch(removeCustomerAction(customer.id))
	}
	return (
		<div>
			<div>
				<h2>Баланс: {cash}</h2>
				<input
					type='number'
					value={amount}
					onChange={e => setAmount(e.target.value)}
					placeholder='Введите сумму'
				/>
				<button onClick={addCash}>Пополнить</button>
				<button onClick={getCash}>Снять</button>
				<div style={{ marginTop: '30px' }}>
					<button onClick={() => addCustomer(prompt())}>
						Добавить клиента
					</button>
					<button onClick={getCash}>Удалить клиента</button>
				</div>
			</div>
			{customers.length > 0 ? (
				<div>
					{customers.map(customer => (
						<div onClick={() => removeCustomer(customer)}>{customer.name}</div>
					))}
				</div>
			) : (
				<div>Клиенты отсутствуют</div>
			)}
		</div>
	)
}

export default App
