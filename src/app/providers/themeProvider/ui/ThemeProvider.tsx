import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from '../lib/ThemeContext';
import { FC, ReactNode, useMemo, useState } from 'react';

const themeDefault = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

type ChildrenProps = { children: ReactNode };

const ThemeProvider: FC<ChildrenProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(themeDefault);

	const defaultProps = useMemo(() => {
		return {
			theme,
			setTheme,
		};
	}, [theme]);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
