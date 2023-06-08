import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	render: () => <Button children='text' theme={ThemeButton.CLEAR} />,
};

export const Secondary: Story = {
	render: () => <Button children='text' theme={ThemeButton.OUTLINE} />,
};
