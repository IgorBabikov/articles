import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import Main from './Main';

const meta: Meta<typeof Main> = {
	title: 'pages/Main',
	component: Main,
};

export default meta;
type Story = StoryObj<typeof Main>;

export const Light: Story = {
	render: () => <Main />,
};

export const Dark: Story = {
	render: () => <Main />,
	decorators: [Story => ThemeDecorator(Theme.DARK)(Story)],
};
