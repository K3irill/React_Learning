import { addManyCustomersAction } from '../store/reducers/customersReducer'

export const fetchCustomers = () => {
	return function (dispatch) {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json => dispatch(addManyCustomersAction(json)))
	}
}
