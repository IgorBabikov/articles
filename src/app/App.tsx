import { classNames } from 'shared/lib/classNames/classNames';

import { useTheme } from 'app/providers/themeProvider';

import { Navbar } from 'widgets/NavBar';
import { AppRouter } from './providers/route';
import './styles/index.scss';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div
			className={classNames('app', [theme], { active: false, hover: false })}
		>
			<Navbar />

			<button onClick={toggleTheme}>Изменить тему</button>

			<AppRouter />
		</div>
	);
};
