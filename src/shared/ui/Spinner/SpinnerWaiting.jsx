
import { memo } from 'react';
import cn from 'classnames';
import s from './spinnerWaiting.module.scss'

const SpinnerWaiting = memo(({page}) => {
	return (
		<div className={cn(s.lds_ellipsis, {
			[s.book]: page === 'book'
		})}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
})

export default SpinnerWaiting;
