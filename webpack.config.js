const path = require(`path`); // Базовая переменная для Windows и Linux
const webpack = require('webpack');
const merge = require('webpack-merge');
const pug = require("./webpackModules/pug");
const devServer = require("./webpackModules/devserver");
const sass = require('./webpackModules/sass');
const uglify = require('./webpackModules/js.uglify');
const cleanDstDirectory = require('./webpackModules/clean');
const cssMinyfy = require('./webpackModules/cssMinify');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // плагин создания html
// Базовые пути
var PATHS = {
	sourceJs: path.join(__dirname, 'src/js'),
	sourcePug: path.join(__dirname, 'src/pug'),
	build: path.join(__dirname, 'dst')
};
const common = merge([
	{
		entry: {
			// первая точка входа
			'index': PATHS.sourcePug + "/pages/index/index.js",
			// вторая точка входа
			'blog': PATHS.sourcePug + "/pages/blog/blog.js"
		},
		output: {
			path: PATHS.build, // путь компиляции
			filename: "./js/[name].[hash].js" // имя фйала
		},
		devtool:'source-map',
		plugins: [
			// объявление плагина и его настройки
			new HtmlWebpackPlugin({
				template: PATHS.sourcePug + '/pages/index/index.pug',
				chunks: ['index', 'common'],
				filename: "index.html"
			}),
			new HtmlWebpackPlugin({
				template: PATHS.sourcePug + '/pages/blog/blog.pug',
				chunks: ['blog', 'common'],
				filename: "blog.html"
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'common',
				minChunks: Infinity
			})
		]
	},
	pug()
]);
module.exports = function (env) {
	if (env === 'prod') {
		return merge([
			cleanDstDirectory(),
			common,
			sass(),
			cssMinyfy(),
			uglify()
		])
	}
	if (env === 'dev') {
		return merge([
			common,
			sass(),
			devServer()
		])
	}
};