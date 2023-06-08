import type { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/themeProvider/index';
import '../../src/app/styles/index.scss';
import { RouterDecoration } from '../../src/shared/config/storybook/RouterDecoration';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},

	decorators: [
		Story => ThemeDecorator(Theme.LIGHT)(Story),

		Story => RouterDecoration(Story),
	],
};

export default preview;
