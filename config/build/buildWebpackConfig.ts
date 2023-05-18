import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { BuildOption } from './types/config';

export function buildWebpackConfig(options: BuildOption): webpack.Configuration {
	const {mode, paths, isDev} = options

	return {
		mode: mode,

		entry: paths.entry,

		output: {
			filename: "[name].[contenthash].js",
			path: paths.build,
			clean: true,
		},

		plugins: buildPlugins(options),


		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolves(),

		devtool: isDev ? 'inline-source-map': undefined,
		devServer: isDev ?  buildDevServer(options) : undefined,
	};
}
