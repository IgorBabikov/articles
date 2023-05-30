import { classNames } from 'shared/lib/classNames/classNames';

import { useTheme } from 'app/providers/themeProvider';

import { useEffect } from 'react';
import { Navbar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/route';
import './styles/index.scss';

export const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', [theme], {})}>
			<Navbar />

			<div className='page'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	);
};
