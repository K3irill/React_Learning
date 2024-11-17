import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ThemeContextType {
	theme: string
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<string>('dark')

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export { ThemeProvider, ThemeContext }
