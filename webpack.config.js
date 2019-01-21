const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
   module: {
      rules: [
         {
            test: /\.html$/,
            use: [{ loader: "html-loader", options: { minimize: true } }]
         },
         {
            test: /\.(png|jpe?g)/i,
            use: [
               {
                  loader: "url-loader",
                  options: {
                  name: "./img/[name].[ext]",
                  limit: 10000
               }
               },
               {
                  loader: "img-loader"
               }
            ]
         }
      ]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: "src/index.html",
         filename: "./index.html"
      })
   ]
};