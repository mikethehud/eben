const path = require("path");

module.exports = [
	{
		/*
		* CLIENT CONFIG
		*/
		name: "client",
		target: "web",
		entry: "./src/client.js",
		output: {
			path: path.join(__dirname, "static"),
			filename: "client.js",
			publicPath: "/static/",
		},
		resolve: {
			extensions: [".js", ".jsx"]
		},
		devtool: "source-map",
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					loader: "babel-loader"
				},
				{
	        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
	        loader: "url-loader"
	      },
				{
					test: /\.scss$/,
					use: [
						{ loader: "style-loader" },
						{ loader: "css-loader",
							options: {
								modules: true,
								importLoaders: 1,
								localIdentName: "[name]__[local]___[hash:base64:5]",
								sourceMap: true
							}
						},
						{ loader: "sass-loader" }
					]
				}
			],
		},
	},
	{
		/*
		* SERVER CONFIG
		*/
		name: "server",
		target: "node",
		entry: "./src/server.js",
		output: {
			path: path.join(__dirname, "static"),
			filename: "server.js",
			libraryTarget: "commonjs2",
			publicPath: "/static/",
		},
		devtool: "source-map",
		resolve: {
			extensions: [".js", ".jsx"]
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					loader: "babel-loader"
				},
				{
	        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
	        loader: "url-loader"
	      },
				{
					test: /\.scss$/,
					use: [
						{ loader: "isomorphic-style-loader" },
						{ loader: "css-loader",
							options: {
								modules: true,
								importLoaders: 1,
								localIdentName: "[name]__[local]___[hash:base64:5]",
								sourceMap: true
							}
						},
						{ loader: "sass-loader" }
					]
				}
			],
		},
	}
];
