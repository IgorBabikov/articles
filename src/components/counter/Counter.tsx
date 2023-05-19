import { useState } from 'react';
import s from './counter.module.scss';

export const Counter = () => {
	const [count, setCount] = useState(0);

	const onPlusCount = () => {
		setCount(prev => prev + 1);
	};

	return (
		<>
			<p className={s.descr}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
				asperiores eaque quis vero optio hic soluta. Suscipit veniam reiciendis,
				magnam commodi a obcaecati molestias minima dignissimos voluptas
				doloremque sit nesciunt.
			</p>
			<div className={s.count}>{count}</div>
			<button onClick={onPlusCount}>+</button>
		</>
	);
};
