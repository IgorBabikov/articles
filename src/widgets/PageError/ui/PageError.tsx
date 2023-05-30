import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import s from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
	const { t } = useTranslation();

	const onReload = () => {
		location.reload();
	};
	return (
		<div className={classNames(s.PageError, [className], {})}>
			<h1>{t('Произошла непредвиденная ошибка')}</h1>

			<Button className={s.reload} onClick={onReload}>
				{t('Перезагрузить страницу')}
			</Button>
		</div>
	);
};
