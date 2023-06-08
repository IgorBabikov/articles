import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const PRIMARY: Story = {
	render: () => (
		<AppLink to={'/'} theme={AppLinkTheme.PRIMARY}>
			PRIMARY
		</AppLink>
	),
	decorators: [Story => ThemeDecorator(Theme.DARK)(Story)],
};

export const SECONDARY: Story = {
	render: () => (
		<AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
			SECONDARY
		</AppLink>
	),
	decorators: [Story => ThemeDecorator(Theme.DARK)(Story)],
};
