const path = require("path"); // Базовая переменная для Windows и Linux
const HtmlWebpackPlugin = require('html-webpack-plugin'); // плагин создания html
// Базовые пути
var PATHS = {
	source: path.join(__dirname, 'src'),
	build: path.join(__dirname,'dst')
};

module.exports ={
	entry: PATHS.source + "/index.js", // точка входа в приложение
	output: {
		path: PATHS.build, // путь компиляции
		filename: "[name].js" // имя фйала
	},
	plugins: [
		// объявление плагина и его настройки
		new HtmlWebpackPlugin({
			title: "Webpack 2 app"
		})
	]
};