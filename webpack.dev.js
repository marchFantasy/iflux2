
module.exports = {
  devtool: 'cheap-source-map',

  entry: {
    index: './example/todo-web/index.js'
  },
  output: {
    path: './example/todo-web/build/',
    publicPath:"/todo-web/build/",
    filename: 'bundle-[name].js'
  },
  module: {
    loaders: [
      {test: /\.js/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};