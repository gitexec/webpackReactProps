# webpackReactProps

* npm init -y

* npm install --save-dev babel-core babel-loader babel-preset-es2015 webpack webpack-dev-server prop-types

//under package.json to the scripts:
    "build": "webpack-dev-server --config webpack.config.js",

## Add react

* npm install --save-dev babel-preset-react react react-dom

* Change test to:
    test: /\.jsx?$/,

* Add .babelrc file with:

{
  "presets": ["es2015", "react"]
}


==done==

# Webpack for production

The easiest way to minify and compress files for production is to run webpack -p. There is much more to explore with webpack. You can get more in depth explanations of all that webpack has to offer at the webpack docs.

https://www.rithmschool.com/courses/react-fundamentals/webpack

#You can run this:

* npm install
* npm run build
