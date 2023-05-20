import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme } from 'app/providers/themeProvider';
import { AboutPage } from 'pages/about';
import { MainPage } from 'pages/main/Main.async';
import './styles/index.scss';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div
			className={classNames('app', [theme], { active: false, hover: false })}
		>
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>

			<button onClick={toggleTheme}>Изменить тему</button>

			<Suspense fallback={<div>loading....</div>}>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};
