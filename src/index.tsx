import { ErrorBoundary } from 'app/providers/errorBoundary';
import { ThemeProvider } from 'app/providers/themeProvider';
import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../src/shared/config/i18n/i18n';
import { App } from './app/App';

render(
	<BrowserRouter>
		<Suspense fallback={''}>
			<ErrorBoundary>
				<ThemeProvider>
					<Suspense fallback={''}>
						<App />
					</Suspense>
				</ThemeProvider>
			</ErrorBoundary>
		</Suspense>
	</BrowserRouter>,

	document.getElementById('root')
);
