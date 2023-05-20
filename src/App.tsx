import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from './helpers/classNames/classNames';
import { AboutPage } from './pages/about/About.async';
import { MainPage } from './pages/main/Main.async';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', [theme], { active: false, hover: false })}>
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
