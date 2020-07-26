# starter-react-spa

A starter for single-page application of website based on React.

## Clone Starter

To clone this starter to our begining progject. We can use tranditional way to use the command `git clone`. But also we can use other way including, [degit](https://www.npmjs.com/package/degit) or utilize the [create-next-app](https://www.npmjs.com/package/create-next-app).

1. Git Clone

```
git clone https://github.com/vannoel/starter-react-spa [new project]
rm -rf [new project]/.git
```

But if you don't like to delete the .git by self. You can try those way as following.

2. Node Degit

```
npm install -g degit
mkdir [new project]
cd [new project]
degit https://github.com/vannoel/starter-react-spa
```

3. Create-next-app

This package aims to clone a starter as a beginning of project. So it will detect the package.json file before cloning. And it will auto-install after clone the starter.

```
npm init next-app [new project] --example "https://github.com/vannoel/starter-react-spa"
```

## File System

```
+-- configs/
| `-- config.js (loaders of webpack)
+-- public/
| +-- favicon.ico
| `-- index.html
+-- src/
| +-- assets/
| | +-- definitions/
| | | `-- routeMap.js
| | `-- style/ (Style files)
| +-- plugins/ (Packages' configuration)
| +-- routes/ (React routes)
| +-- stores/ (Rect stores)
+-- utils/ (utils of webpack)
+-- .browserslistrc
+-- .env
+-- .eslint.js
+-- .gitignore
+-- package.json
+-- package-lock.json
+-- RREADME.md
+-- webpack.config.js

```

+-- which-module@2.0.0
|
`-- isobject@3.0.1 deduped

## Package List

Here I list those packages used in this starter. And thanks to each author for your masterpieces sincerely.

> rimraf
>
> dotenv
>
> recompose

> webpack
>
> webpack-cli
>
> webpack-dev-server
>
> webpack-merge
>
> html-webpack-plugin
>
> mini-css-extract-plugin
>
> optimize-css-assets-webpack-plugin
>
> terser-webpack-plugin
>
> uglifyjs-webpack-plugin

> @babel
>
> babel-loader
>
> babel-eslint

> css-loader

> postcss-loader
>
> autoprefixer

> sass-loader
>
> sass
>
> node-sass

> eslint-loader
>
> eslint
>
> eslint-plugin-react

> file-loader

> react
>
> react-dom
>
> react-redux
>
> react-router-dom

> redux
>
> redux-persist

> axios

> @fortawesome

## Reference

- [React-router-dom from v5 to v6](https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md)
- [React-router-dom 6.0.0](https://github.com/ReactTraining/react-router/blob/dev/docs/installation/getting-started.md)
