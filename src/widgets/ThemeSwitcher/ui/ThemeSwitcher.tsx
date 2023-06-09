import { Theme, useTheme } from 'app/providers/themeProvider';
import { FC } from 'react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(s.ThemeSwitcher, [className], {})}
			onClick={toggleTheme}
		>
			{theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};
