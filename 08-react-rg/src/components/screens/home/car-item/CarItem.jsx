import styles from '../Home.module.css'
export default function CarItem({ car }) {
	return (
		<div key={car.id} className={styles.item}>
			<div
				className={styles.image}
				style={{ backgroundImage: `url(${car.image})` }}
			/>
			<div className={styles.info}>
				<h2>{car.name}</h2>
				<p>
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
						currencyDisplay: 'narrowSymbol',
					}).format(car.price)}
				</p>
				<button>Read more</button>
			</div>
		</div>
	)
}
