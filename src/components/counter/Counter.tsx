import { useState } from 'react';
import s from './counter.module.scss'

export const Counter = () => {
	const [count, setCount] = useState(0);

	const onPlusCount = () => {
		setCount(prev => prev + 1);
	};

	return (
		<>
			<div className={s.count}>{count}</div>
			<button onClick={onPlusCount}>+</button>
		</>
	);
};
