import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import s from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const onMenuCollapsed = (): void => {
		setCollapsed(prev => !prev);
	};

	return (
		<div
			className={classNames(s.Sidebar, [className], {
				[s.collapsed]: collapsed,
			})}
		>
			<div className={s.themeSwitcher}>
				<ThemeSwitcher />
			</div>

			<button onClick={onMenuCollapsed}>свернуть</button>
		</div>
	);
};
