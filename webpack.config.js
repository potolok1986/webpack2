const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var PATHS = {
	source: path.join(__dirname, 'src'),
	build: path.join(__dirname,'dst')
};

module.exports ={
	entry: PATHS.source + "/index.js",
	output: {
		path: PATHS.build,
		filename: "[name].js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack 2 app"
		})
	]
};