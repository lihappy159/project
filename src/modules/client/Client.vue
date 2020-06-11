<template>
    <div id="client">
        <router-view></router-view>
    </div>
</template>

<script>
    import util from "@/util/index"
    export default {
        name: 'client',

        created() {
            this.getCode();
            // window.localStorage.setItem("openid",'123456789')
        },
        methods: {
            //微信端获取code票据
            getCode() {
                let local = "http://sanmi.yuechong.vip/reser/client.html";// 获取页面url
                // let appid = 'wxba39134007a73ce4';//二附院
                let appid = 'wx96f3970c0ed33897';//测试
                // let appsecret = "677fd0d15631993a4004b3a0d2898673";
                let code = util.getUrlParam("code");
                if (code == null || code === '') { // 如果没有code，则去请求
                    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(local)}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`
                }
                else {
                    this.$wxhttp.get(`/wx/getWechatGZAccessToken?code=${code}`).then(res=>{
                        if(res.data.success) {
                            window.localStorage.setItem("openid",res.data.openid)
                        }
                    }).catch(err=>{
                        console.log("client.vue报错，没有获取到openid");
                        console.log(err+"++++err");
                    });
                }
            },
        }
    }
</script>

<style scoped>

</style>
