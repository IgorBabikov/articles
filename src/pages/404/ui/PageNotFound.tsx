import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './PageNotFound.module.scss';

interface PageNotFoundProps {
	className?: string;
}

export const PageNotFound: FC<PageNotFoundProps> = ({ className }) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(s.PageNotFound, [className], {})}>
			{t('Страница не найдена')}
		</div>
	);
};
