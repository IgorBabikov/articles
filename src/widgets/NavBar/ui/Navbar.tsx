import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import s from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	return (
		<div className={classNames(s.Navbar, [className], {})}>
			<ThemeSwitcher />

			<div className={s.links}>
				<AppLink className={s.mainLink} to={'/'} theme={AppLinkTheme.PRIMARY}>
					Home
				</AppLink>

				<AppLink to={'/about'} theme={AppLinkTheme.PRIMARY}>
					About
				</AppLink>
			</div>
		</div>
	);
};
