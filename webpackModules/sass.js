const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function () {
	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: "css-loader"
					})
				},
				{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: ['css-loader', 'sass-loader']
					})
				}
			],
		},
		plugins: [
			new ExtractTextPlugin('./css/[name].[hash].css'),
			/*new OptimizeCssAssetsPlugin()*/
		]
	}
};