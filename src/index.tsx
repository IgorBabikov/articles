import { ThemeProvider } from 'app/providers/themeProvider';
import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import '../src/shared/config/i18n/i18n';

render(
	<BrowserRouter>
		<ThemeProvider>
			<Suspense fallback={''}>
				<App />
			</Suspense>
		</ThemeProvider>
	</BrowserRouter>,

	document.getElementById('root')
);
