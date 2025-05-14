'use client'
import Square from '@/components/square/Square'
import { useEffect, useState } from 'react'

export default function Home() {
	const [theme, setTheme] = useState('')

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme')
		if (localTheme !== null) {
			setTheme(localTheme)
		}
	}, [])

	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		window.localStorage.setItem('theme', newTheme)
		setTheme(newTheme)
	}
	return (
		<main className={theme}>
			<h1
				style={{
					fontSize: '50px',
					position: 'fixed',
					top: '0',
				}}
			>
				I black square
			</h1>
			<Square />
			<button onClick={switchTheme} data-theme={theme}>
				{theme === 'light' ? 'Switch to light mode' : 'Switch to dark mode'}
			</button>
		</main>
	)
}
