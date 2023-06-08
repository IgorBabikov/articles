import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
	title: 'widgets/ThemeSwitcher',
	component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
	render: () => <ThemeSwitcher  />,
};

export const Dark: Story = {
	render: () => <ThemeSwitcher />,
	decorators: [Story => ThemeDecorator(Theme.DARK)(Story)],
};
