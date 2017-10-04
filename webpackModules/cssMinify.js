const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = function () {
	return {
		plugins: [
			new OptimizeCssAssetsPlugin({cssProcessorOptions: {discardComments: {removeAll: true}}})
		]
	}
};