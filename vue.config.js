module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // https: false,  //是否使用https协议
        // hotOnly: false, //是否开启热更新
        target : 'http://localhost:8080',
        changeOrigin:true,
        ws:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
