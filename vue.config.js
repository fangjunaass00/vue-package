module.exports = {
    publicPath: './',
    // assetsDir: "./",
    css: {
        loaderOptions: {
            // css: {
            //   url: true
            // },
            // 给 sass-loader 传递选项
            sass: {
                // sourceMap: true,
                // sourceMapContents: false,
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.scss` 这个文件
                data: `@import "~@/style/common.scss";`,
            },
        },
    },
};
