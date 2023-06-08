import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { BuildOption } from './types/config';

export function buildLoaders({ isDev }: BuildOption): webpack.RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const cssLoader = buildCssLoaders(isDev)

	const babelLoader = {
		test: /\.(js|tsx|jsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					["i18next-extract", {
						locales: ['ru', 'en'],
						keyAsDefaultValue: true
					}],
					
				 ]
			},
		},
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [babelLoader, typescriptLoader, cssLoader, svgLoader];
}
