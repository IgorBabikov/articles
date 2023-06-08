import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { PageNotFound } from './PageNotFound';

const meta: Meta<typeof PageNotFound> = {
	title: 'pages/PageNotFound',
	component: PageNotFound,
};

export default meta;
type Story = StoryObj<typeof PageNotFound>;

export const Light: Story = {
	render: () => <PageNotFound />,
};

export const Dark: Story = {
	render: () => <PageNotFound />,
	decorators: [Story => ThemeDecorator(Theme.DARK)(Story)],
};
