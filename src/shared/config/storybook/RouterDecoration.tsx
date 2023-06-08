import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecoration = (StoryComponent: () => StoryFn) => (
	<BrowserRouter>{StoryComponent()}</BrowserRouter>
);
