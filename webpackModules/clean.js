let WebpackCleanupPlugin = require( 'webpack-cleanup-plugin');

module.exports = function () {
	return {
		plugins: [
			new WebpackCleanupPlugin()
		]
	}
};
