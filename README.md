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
| `-- config.js (loaders for webpack)
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
+-- utils/ (utils for webpack)
+-- .browserslistrc
+-- .env.development
+-- .env.production
+-- .eslint.js
+-- .gitignore
+-- .huskyrc.json
+-- .lintstagedrc.json
+-- .prettierrc.js
+-- package.json
+-- package-lock.json
+-- postcss.config.js
+-- RREADME.md
+-- webpack.base.js
+-- webpack.dev.js
+-- webpack.prod.js
```
