const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     "http://101.37.124.37:8090": {
  //       target: "http://101.37.124.37:8090",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^http://101.37.124.37:8090": "",
  //       },
  //     },
  //   },
  // },

  // 去除生产环境的警告，特殊变量的警告
  chainWebpack: (config) => {
    config.plugin("define").tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: "true",
        __VUE_PROD_DEVTOOLS__: "false",
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      });
      return definitions;
    });
  },
});
