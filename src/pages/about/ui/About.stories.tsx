import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import About from './About';

const meta: Meta<typeof About> = {
	title: 'pages/About',
	component: About,
};

export default meta;
type Story = StoryObj<typeof About>;

export const Light: Story = {
	render: () => <About />,
};

export const Dark: Story = {
	render: () => <About />,
	decorators: [Story => ThemeDecorator(Theme.DARK)(Story)],
};
