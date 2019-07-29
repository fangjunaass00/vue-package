# 遇到问题一览

因为作者本身习惯了写原生 HTML 代码，所以在框架上有许多不熟悉的地方。以下列出了在这次项目中碰到的一些问题，也方便像我一样的框架初学者查看

## index.html 在哪里？

手机端项目里有一些常见的`<meta>`标签，比如`viewport`，`no-cache`之类，包括每次`<title>`这些都要在`index.html`里定义。

**`index.html`不在根目录下，而是在`public`文件夹里。**

## 怎么没法`console.log`?一打`console.log`就报错，还无法编译？

出现这个问题主要是**no-console**的限制，`eslint`中有代码规范规定了在代码中不允许出现`console.log`，需要在`package.json`文件中修改`eslintConfig`的`rules`规则，示例如下：

```js
"eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    // 关键代码
    "rules": {
      "no-console": "off"
    },
    "parserOptions": {
      "parser": "babel-eslint"
    }
  }
```

[参考资料](https://eslint.org/docs/rules/no-console)，最后一个例子
[参考资料](https://www.jianshu.com/p/bfc7e7329cff)

## sass-loader 怎么还需要自己安装？

vue-cli 默认不安装 sass，所以当引入 sass 后，会报错

```
Failed to resolve loader: sass-loader
You may need to install it.
```

尝试安装如下操作

```
npm install sass-loader node-sass webpack --save-dev
```

安装完成后，可能提示需要修复

```
npm audit fix
```

之后即可成功运行

[参考资料](https://github.com/webpack-contrib/sass-loader#examples)

## 发布的一些问题

1. vue.config.js

- 这个文件需要自己新增，文件和`package.json`同级
- 暂时没有放太多配置项在里面，可以随时添加，[文档在这里](https://cli.vuejs.org/zh/config/#全局-cli-配置)

2. 页面运行后无法加载 js 文件，观察 chrome 的 source 中的 js 文件，发现都是`<!Doctype html>`文件，根本没有展示真正内容

- publicPath 出的问题，因为这个项目现在是两层： `HTML%-TEMPLATE-VUE-V0.1 -> template-vue`，所以路径要是`./`，在`vue.config.js`中写入一下内容

```js
module.exports = {
  publicPath: "./"
};
```
