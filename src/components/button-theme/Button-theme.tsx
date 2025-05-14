'use client'
import { useEffect, useState } from 'react'

const Button_theme = () => {
	const [theme, setTheme] = useState('')

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme')
		setTheme(localTheme)
	}, [])

	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		window.localStorage.setItem('theme', newTheme)
		setTheme(newTheme)
	}

	return (
		<main className={theme}>
			<button onClick={switchTheme} theme={theme}>
				{theme === 'light' ? 'Switch to light mode' : 'Switch to dark mode'}
			</button>
		</main>
	)
}

export default Button_theme
