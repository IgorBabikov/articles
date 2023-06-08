import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
	title: 'widgets/Sidebar',
	component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
	render: () => <Sidebar />,
};

export const Dark: Story = {
	render: () => <Sidebar />,
	decorators: [Story => ThemeDecorator(Theme.DARK)(Story)],
};
