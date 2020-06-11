<template>
    <div id=" client">
        <div class="mine">
            <div class="mine-top" v-model="mine">
                <div><img :src="mine.img"></div>
                <div>{{ mine.name }}</div>
                <div>{{ mine.phone }}</div>
                <div><span>{{ mine.age }}岁</span></div>
            </div>


            <el-card class="box-card" v-for="(item,index) in mineData" :key="index"  >
                <div @click="mineJump(index)" style="line-height: 0.8rem">
                    <span><img :src="item.src1"></span>
                    <span>{{ item.title }}</span>
                    <span style="float: right;">
                            <img :src="item.src2">
                         </span>
                </div>
            </el-card>
        </div>
    </div>
</template>


<script>
    import { Dialog } from 'vant';
    export default {
        name: "login",
        data(){
            return {
                mine:{
                    img:require("@/assets/img/touxiang.png"),
                    name:"123",
                    phone:"13",
                    age:"12"
                },
                flag:"",//判断新老用户,
                openid:"",
                mineData:[
                    {
                        src1:require("@/assets/img/mine/list_1.png"),
                        title:"申请单",
                        src2:require("@/assets/img/mine/dayu.png"),
                        to:"/mine/form"
                    },
                    {
                        src1:require("@/assets/img/mine/news_1.png"),
                        title:"关于我们",
                        src2:require("@/assets/img/mine/dayu.png"),
                        to:"/mine/about"
                    },
                ]
            }
        },
        created(){
            this.getUserInfo();
        },
        methods:{
            //初始化获取用户信息
            async getUserInfo(){
                //获取openid
                this.openid = window.localStorage.getItem("openid");//打包的时候取消注释
                // this.id = 123 ;//=>打包的时候要注释掉
                //发送请求
                const  { data } = await this.$http.get(`/getUserInfo?openId=${ this.openid }`);
                console.log(data);
                //如果成功
                if (data.success) {
                    this.mine.name =  this.$bus.name = data.user.name;
                    this.mine.phone = this.$bus.phone = data.user.phone;
                    this.mine.age =  this.$bus.age = data.user.age;
                    this.mine.img = window.location.origin + data.user.photo;

                    this.flag = data.flag;

                    this.$bus.birth = data.user.birth;
                    this.$bus.fetus = data.user.fetus;
                    this.$bus.photo = data.user.photo;
                    this.$bus.menstruation = data.user.menstruation;
                    window.localStorage.setItem("id",data.user.id);//=>第五处id
                    // if(this.flag == 0){
                        // this.$router.push(`/home/check/我的`)
                    // }
                }else{
                    Dialog.alert({
                        message: "提交失败",
                    });
                }
            },
            //点击跳转
            mineJump(index){
                //如果参数不存在
                let mineResult = [this.mine.name,this.mine.phone,this.mine.age].every(item=>{
                    return typeof item !== "undefined"
                });
                if(!mineResult){
                    console.log("参数不存在");
                    return
                }
                //
                if(index == 0){
                    if(this.flag){
                        //老用户
                        this.$router.push("/form")
                    }else {
                        //新用户
                        this.$router.push("/space")
                    }
                };
                if(index == 1){
                    if(this.flag){
                        //老用户
                        this.$router.push("/about")
                    }else {
                        //新用户
                        this.$router.push("/space")
                    }
                };
            }
        }
    }

</script>

<style>
    .mine{
        font-size: 0.27rem;
    }
    .mine-top{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        color: black;
        font-size: 0.4rem;

    }
    .mine-top img{
        /*background-color: #c9394a;*/
        width: 1.4rem;
        height: 1.4rem;
        vertical-align: middle;
        border-radius: 100%;
    }
    .mine-top div{
        margin: 0 auto;
    }
    .mine-top div:nth-child(1){
        margin-top: 0.5rem;
    }
    .mine-top div:nth-child(2){
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
    }
    .mine-top div:nth-child(4){
        margin-top: 0.2rem;
        margin-bottom: 1rem;
    }
    .mine-top div span,.box-card span{
        padding-left: 0.1rem;

    }
    .box-card {
        height: 0.8rem;
    }
    .box-card img{
        vertical-align: middle;
        cursor: pointer;
    }
    .box-card .el-card__body{
        padding: 0;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        height: 100%;
    }
    .el-card{
        width:90%;
        margin:0.1rem auto;
    }
</style>