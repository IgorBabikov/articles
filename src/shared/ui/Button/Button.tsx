import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';


export enum ThemeButton {
	OUTLINE = 'outline',
	CLEAR = "clear"
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton
}

export const Button: FC<ButtonProps> = props => {
	const { className, children, theme, ...otherProps } = props;

	return (
		<button className={classNames(s.Button, [className, s[theme]], {})} {...otherProps}>
			{children}
		</button>
	);
};
