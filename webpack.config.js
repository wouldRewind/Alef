// webpack.config.js
module.exports = {
	module: {
		rules: [
			{
				test: /\.(ts|js)$/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/],
				},
				exclude: /node_modules/,
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			}
		]
	}
}