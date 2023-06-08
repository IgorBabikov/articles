import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
	title: 'shared/Loader',
	component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
	render: () => <Loader />,
};

export const DARK: Story = {
	render: () => <Loader />,
	decorators: [Story => ThemeDecorator(Theme.DARK)(Story)],
};
