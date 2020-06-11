<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import util from "./util/index"

    export default {
        name: 'App',
        components: {

        },

        // created(){
        //   this.getUrlCode();
        // },
        // methods: {
        //     getUrlCode(){
        //         let appid = 'wx96f3970c0ed33897';
        //         let appsecret = "677fd0d15631993a4004b3a0d2898673";
        //         let code= this.getUrlKey("code");
        //         // console.log(this.axios)
        //         if(code){
        //             this.$wxhttp.get(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}'&secret=${appsecret}&code=${code}&grant_type=authorization_code1`)
        //                 .then(res=>{
        //                     this.openid = res.data.openid;
        //                     console.log(res)
        //                 }).catch(error=>{
        //                 console.log(error)
        //             })
        //         }else{
        //             this.getCodeApi();
        //         }
        //     },
        //     getCodeApi() {//获取code
        //         let  appid = 'wx96f3970c0ed33897';
        //          let local = "http://sanmi.yuechong.vip/reser" ;
        //         // let urlNow = encodeURIComponent(window.location.href);
        //         let urlNow = encodeURIComponent(local);
        //         let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' +urlNow+ '&response_type=code&scope=snsapi_base#wechat_redirect';
        //         window.location.href = url
        //     },
        //     getUrlKey: function (name) {//获取url 参数
        //         return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
        //     },
        // }

        created() {
            // this.getCode();
            window.localStorage.setItem("openid",'222')
        },
        methods: {
            //微信端获取code票据
            getCode()
            {
                let local = "http://sanmi.yuechong.vip/reser";// 获取页面url
                // let local = window.location.origin;// 获取页面url
                let appid = 'wx96f3970c0ed33897';//测试
                // let appid = 'wxba39134007a73ce4';//二附院
                // let appsecret = "677fd0d15631993a4004b3a0d2898673";
                // this.code = this.getUrlCode().code ;// 截取code
                let code = util.getUrlParam("code");

                // if (code == null || code === '') { // 如果没有code，则去请求
                //     window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(local)}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`
                //
                //     this.$wxhttp.get(`/wx/getWechatGZAccessToken?code=${code}`).then(res => {
                //         if (res.data.success) {
                //             // console.log("这是openid");
                //             // console.log(res.data.openid );
                //             window.localStorage.setItem("openid", res.data.openid);
                //             console.log(res.data.openid)
                //         }
                //     }).catch(err => {
                //         console.log("App.vue报错，没有获取到openid");
                //         console.log(err + "++++err");
                //     });
                // }


                if (code == null || code === '') { // 如果没有code，则去请求
                    window.location.replace(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(local)}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`)
                }
                else {
                       this.$wxhttp.get(`/wx/getWechatGZAccessToken?code=${code}`).then(res=>{
                           if(res.data.success) {
                               window.localStorage.setItem("openid",res.data.openid)
                           }
                       }).catch(err=>{
                            console.log("App.vue报错，没有获取到openid");
                            console.log(err+"++++err");
                        });
                }
            }
        }
    }
</script>

<style scoped>

</style>
