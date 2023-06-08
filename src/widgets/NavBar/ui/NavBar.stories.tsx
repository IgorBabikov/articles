import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
	title: 'widgets/Navbar',
	component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
	render: () => <Navbar />,
};

export const Dark: Story = {
	render: () => <Navbar />,
	decorators: [Story => ThemeDecorator(Theme.DARK)(Story)],
};
