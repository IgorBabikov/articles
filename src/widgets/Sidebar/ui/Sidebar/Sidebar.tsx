import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import s from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);
	const { t } = useTranslation();

	const onMenuCollapsed = (): void => {
		setCollapsed(prev => !prev);
	};

	return (
		<aside
			className={classNames(s.Sidebar, [className], {
				[s.collapsed]: collapsed,
			})}
		>
			<div className={s.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher />
			</div>

			<button onClick={onMenuCollapsed}>{t('Cвернуть')}</button>
		</aside>
	);
};
