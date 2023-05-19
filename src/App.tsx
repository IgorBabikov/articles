import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.scss';
import { AboutPage } from './pages/about/About.async';
import { MainPage } from './pages/main/Main.async';

export const App = () => {
	return (
		<div className='app'>
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>

			<Suspense fallback={<div>loading....</div>}>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};
