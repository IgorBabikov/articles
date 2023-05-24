import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import s from './LanguageSwitcher.module.scss'
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
	className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
	const { t, i18n } = useTranslation();

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button onClick={toggleLanguage} theme={ThemeButton.INDENT} className={classNames(s.LanguageSwitcher, [className], {})}>
			{t('Язык')}
		</Button>
	)
}