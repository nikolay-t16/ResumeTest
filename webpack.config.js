const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pug = {
	test: /\.pug$/,
	use: ['html-loader?attrs=false', 'pug-html-loader']
};

const js = {
	test: /\.js$/,
	use: {
		loader: "babel-loader",
		options: {presets: ["es2015"]}
	}
};

const scss = {
	test: /\.scss$/,
	use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
};

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [pug, js, scss]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.pug',
			inject: false
		}),
		new MiniCssExtractPlugin({
			template: 'src/index.scss',
		})
	]
};

module.exports = config;