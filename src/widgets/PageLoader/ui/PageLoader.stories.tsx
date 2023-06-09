import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
	title: 'widgets/PageLoader',
	component: PageLoader,
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {
	render: () => <PageLoader />,
};

export const Dark: Story = {
	render: () => <PageLoader />,
	decorators: [Story => ThemeDecorator(Theme.DARK)(Story)],
};
