module.exports = {
  entry: "./src/reverser.ts",
  target: "node",
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  output: {
    libraryTarget: "commonjs"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: "ts-loader", options: { transpileOnly: true } }]
      }
    ]
  }
};
