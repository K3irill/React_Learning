'use client'
import Link from 'next/link'
import cn from 'classnames'
import React, { useState } from 'react'
import styles from './Header.module.scss'
const Header = () => {
	const [isActive, setIsActive] = useState(true)
	return (
		<header
			className={cn(styles.header, { [styles['header--active']]: isActive })}
		>
			<strong>K3</strong>
			<nav>
				<Link href={'/'}>Home</Link>
				<Link href={'/about'}>About</Link>
				{/* <Link href={}>			</Link> */}
			</nav>
		</header>
	)
}

export default Header
