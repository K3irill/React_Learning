import { actions } from '../store/favorites/favorite.slice'
import styles from './RecipeItem.module.scss'
import { useDispatch, useSelector } from 'react-redux'

const RecipeItem = ({ recipe }) => {
	const { favorites } = useSelector(state => state)
	const dispatch = useDispatch()
	console.log(favorites)
	const isExists = favorites.some(r => r.id === recipe.id)
	return (
		<div className={styles.item}>
			<h2>{recipe.name}</h2>
			<button onClick={() => dispatch(actions.toggleFavorites(recipe))}>
				add to favorites
			</button>
		</div>
	)
}

export default RecipeItem
