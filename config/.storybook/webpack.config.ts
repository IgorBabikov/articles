import path from 'path';
import webpack from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { BuildPath } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPath = {
		build: '',
		entry: '',
		html: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};

	config.resolve?.modules?.push(paths.src);
	config.resolve?.extensions?.push('.ts, .tsx');

	if (config.module?.rules) {
		config.module.rules = config.module?.rules?.map(
			(rule: webpack.RuleSetRule | '...') => {
				if (rule !== '...' && /svg/.test(rule.test as string)) {
					return { ...rule, exclude: /\.svg$/i };
				}

				return rule;
			}
		);
	}

	config.module?.rules?.push({
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	});

	config.module?.rules?.push(buildCssLoaders(true));

	return config;
};
