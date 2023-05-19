import { Counter } from './components/counter/Counter';
import { Descr } from './components/descr/Descr';
import './index.scss';

export const App = () => {
	return (
		<div className='app'>
			<Counter />
			<Descr />
		</div>
	);
};
