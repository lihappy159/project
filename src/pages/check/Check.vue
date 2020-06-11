<template>
    <div class="check">
        <h2 ><strong>请输入您的基本信息:</strong></h2>
        <check_up
                   ref = "conUp"
                   :up = userData>
        </check_up>
        <!-- <check_down -->
                   <!-- ref = "conDown" -->
                   <!-- :down = userData> -->
        <!-- </check_down> -->


        <!-- <div @click="checkEnter"> -->
            <!-- <Enter></Enter> -->
        <!-- </div> -->

        <div @click="checkNext">
            <Next></Next>
        </div>

    </div>
</template>

<script>
    //子组件
    import Check_up from "./check_up/Check_up"
    import Check_down from "./check_down/Check_down"
    //公共组件

    import Enter from "@/components/next/Enter"
    import Next from "@/components/next/Next"
    //公共方法
    import { dataChange,fetusChange,itemChange } from "@/components/change/index"
    //第三方ui
    import { Dialog } from 'vant';
    export default {
        name: "check",
        components:{
            Check_up,
            Check_down,
            Enter,
            Next
        },
        data() {
            return{
                    userData:{ },
                    flag:0,//默认是新用户
                    menstruation:"",
                    fetus:0,
                    lenCheck:0,//=>如果是5说明有用户填写完整，否则失败
                    openId:"",
                    id:""
            }
        },
        created(){

        },
        methods: {
            //向后台发送请求数据
            //  async initCheck(){
            //      //获取请求参数
            //      this.birth = dataChange(this.$bus.birth);
            //      this.fetus = fetusChange(this.$bus.fetus);
            //      this.phone = this.$bus.phone;
            //      this.name = this.$bus.name;
            //      this.menstruation = dataChange(this.$bus.menstruation);
            //      this.openId = this.$bus.openid;
            //
            //      //发送请求
            //      const{data} = await this.$http.post(`/userBinding?birth=${this.birth}&fetus=${this.fetus}&menstruation=${this.menstruation}&name=${this.name}&openId=${this.openId}&phone=${this.phone}` );
            //      if(data.flag){
            //          console.log("这是老用户");
            //          this.flag = data.flag;
            //          // console.log("这是data.user" );
            //          // console.log(data.user );
            //
            //         //后台获取user的基本信息并添加到$bus
            //          this.userData = data.user;//后台user赋值给userData
            //          this.$bus.name = data.user.name;
            //          this.$bus.birth = data.user.birth;
            //          this.$bus.phone = data.user.phone;
            //          this.$bus.fetus = data.user.fetus;
            //          this.$bus.age = data.user.age;
            //          this.$bus.photo = data.user.photo;
            //          this.$bus.menstruation = data.user.menstruation;
            //          window.localStorage.setItem("id", data.user.id);
            //     }else {
            //          console.log('参数没有获取到，这是新用户,');
            //          return
            //      }
            // },

            //点击下一步
             async checkNext() {

                //判断数据是否完整
                this.lenCheck = this.$refs.conUp.lenUp

                //判断用户基本信息的总长度
                if (this.lenCheck == 3) {
                    //获取请求接口数据
                    // this.birth = dataChange(this.$bus.birth);
                    // this.fetus = fetusChange(this.$bus.fetus);
                    // this.menstruation = dataChange(this.$bus.menstruation);
                    this.name = this.$bus.name;
                    this.phone = this.$bus.phone;
                    this.idCard = this.$bus.idCard;

                    // this.openId = "oFXeLwEP7m1CGLYC";//=>打包这行要注释掉
                    this.openId = window.localStorage.getItem("openid");//=>打包取消注释
                    //判断有没有openID
                    if(!this.openId){
                        console.log(this.openId+"+++++++this.openId");
                        Dialog.alert({
                            message: "openid没有获取到",
                        });
                        return
                    }
                    //发起请求数据
                    const { data } = await this.$http.post(`/userBinding?idCard=${this.idCard}&name=${this.name}&openId=${this.openId}&phone=${this.phone}`);
                    // oFXeLwC1SNHmlG0hPCypBbD1p2hs
                    // oFXeLwC1SNHmlG0hPCypBbD1p2hs
                    //如果请求成功
                    if (data.success) {
                        this.$bus.name = data.user.name;
                        this.$bus.birth = data.user.birth;
                        this.$bus.phone = data.user.phone;
                        this.$bus.fetus = data.user.fetus;
                        this.$bus.age = data.user.age;
                        window.localStorage.setItem("id",data.user.id);//=> 第2处id
                        this.$bus.photo = data.user.photo;
                        // this.$bus.menstruation = data.user.menstruation;
                        this.$router.push(`/home`)
                    }else{
                        Dialog.alert({
                            message: "提交失败",
                        });
                    }
                }
                else {
                    Dialog.alert({
                        message: '请填写正确信息',
                    })
                }

            },


            //点击确定
            // checkEnter() {
            //     this.$router.push("/home/check/zone")
            // },
            //判断生日还是电话
            // getCheckUpValue(val){
            //     if(typeof val =="object") {
            //        return this.birth = dataChange(val)
            //     }
            //     if(typeof val == "string"){
            //         val.length ==11?this.phone = val:this.name = val
            //     }
            // },
            //判断末次月经还是胎儿个数
            // getCheckDownValue(val){
            //     if (typeof val == "object"){
            //         return this.menstruation = dataChange(val)
            //     }
            //     if(val =="单胎"){
            //         return this.fetus = 1
            //     }else{
            //         return this.fetus = 2
            //     }
            // },
        }
    }

</script>

<style >
    .check{
        height: 100vh;
    }
    .check h2{
        color: rgb(0,0,0);
        margin: 0.5rem;
        font-size: 0.4rem;
    }

    .item-check {
        display: flex;
    }
    .item-check-1{
        width: 1.5rem;
        height: 0.98rem;
        display: flex;
        justify-content: center;
        border-bottom:1px solid #DCDFE6;
        border-right: 1px solid #DCDFE6;
    }

    .item-check-1 img{
        height: 0.7rem;
        margin-top: 50%;
        transform: translateY(-86%);
    }
    .item-check-2{
        flex: 1;
    }

    .isActive{
        border-top: 1px solid #DCDFE6;
    }
</style>