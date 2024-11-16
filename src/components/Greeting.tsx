import React from 'react'
import styles from './Greeting.module.css'
interface GreetingProps {
	name: string
	age?: number
	hobby?: string[]
}
const Greeting = ({ name, age, hobby }: GreetingProps) => {
	if (age !== undefined && (isNaN(age) || age < 0)) {
		return (
			<p style={{ color: 'red' }}>Ошибка: некорректное значение возраста</p>
		)
	}
	if (hobby && !Array.isArray(hobby)) {
		return <p style={{ color: 'red' }}>Ошибка: хобби должны быть массивом</p>
	}
	return (
		<div>
			<h2 className={styles.greeting__name}>Привет, {name}!</h2>
			{age !== undefined && (
				<p className={styles.greeting__text}>Похоже, что тебе {age} лет 😊</p>
			)}
			{hobby && hobby.length > 0 ? (
				<ul className={styles.greeting__hobby_list}>
					{hobby.map(item => {
						return (
							<li className={styles.greeting__hobby_item} key={item}>
								{item}
							</li>
						)
					})}
				</ul>
			) : (
				<p className={styles.greeting__no_hobby}>Вы не указали ваши хобби!</p>
			)}
		</div>
	)
}

export default Greeting
