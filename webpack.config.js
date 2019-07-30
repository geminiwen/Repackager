const path = require("path")

const development = process.env.NODE_ENV !== "production"

module.exports = {
    entry: "./static/src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "static/dist")
    },
    mode:  development ? "development" : "production",
    watch: development,
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    },
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', "@babel/preset-react"]
                  
                }
              }
            },
            {
              test: /\.less$/,
              use: [{
                  loader: "style-loader"
              }, {
                  loader: "css-loader"
              }, {
                  loader: "less-loader",
                  options: {
                      javascriptEnabled: true
                  }
              }]
            },
        ]
    }
    
}