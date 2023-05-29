import { lazy } from 'react';

export const MainPage = lazy(
	() =>
		new Promise(resolve => {
			// @ts-ignore
			setTimeout(() => resolve(import('./Main')), 500);
		})
);
