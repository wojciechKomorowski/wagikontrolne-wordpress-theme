const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "js")
	},
	watch: true,
	watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
	},
	mode: 'production',
	// optimization: {
		// minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
	// },
	plugins: [
		new MiniCssExtractPlugin({
			filename: '../css/main.css',
		}),
	],
	module: {
		rules: [
			{
			  test: /\.js$/,
			  exclude: /(node_modules|bower_components)/,
			  use: {
				loader: 'babel-loader',
				options: {
				  presets: ['@babel/preset-env']
				}
			  }
			},
		    {
			  test: /\.scss$/,
			  use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }, { loader: 'postcss-loader' }, { loader: 'sass-loader' }],
		    },
		    {
			  test: /\.(png|jpg|gif|svg)$/,
			  use: [
				{
			      loader:'file-loader',
				  options: {
					name: '[name].[ext]',
					outputPath: '../images/'
				  }
				}
			  ]
		    }
		],
	},
};

