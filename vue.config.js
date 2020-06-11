const path = require("path");


module.exports = {

  devServer:{
      host:"localhost",
      port:8080,
      proxy:{
          "/jeeplus1":{
              target:"http://115.29.37.212:8888/",
              changeOrigin:true,
            }
      }
  },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'static':path.resolve(__dirname, '../static')
            }
        },

    },
    lintOnSave:false,
    publicPath:"/reser",//后端项目的名称
    outputDir:"dist",
    assetsDir:"static",
    indexPath:"index.html",

    pages:{
       client:{
           entry:'src/modules/client/client.js',
           template:"public/client.html"
       },console:{
           entry:"src/modules/console/console.js",
           template:"public/console.html"
       },
        index:{
           entry:"src/main.js",
            template:"public/index.html"
        }
    },
    // pages:{
    //     console: 'src/modules/console/console.js',
    //     client: 'src/modules/client/client.js',
    //     index:"src/main.js"
    // }
};












