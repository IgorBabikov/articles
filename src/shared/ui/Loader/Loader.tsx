import { FC } from 'react';
import './Loader.scss';

interface LoaderProps {
	className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
	return (
		<div className='lds-ellipsis'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
