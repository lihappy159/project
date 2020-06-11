<template>
    <div>
        <h2><strong>意见反馈</strong></h2>
        <el-input class="opinion"
                  type="textarea"
                  :rows="6"
                  placeholder="请留下您的宝贵意见，我们将持续改进"
                  v-model="textarea">
        </el-input>

        <div style="margin: 4rem 1rem;" @click="submitValue">
            <van-button round block type="info" native-type="submit">
                提交
            </van-button>
        </div>

    </div>
</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "appointment",
        data(){
            return{
                textarea:"",
                id:""
            }
        },
        created(){
            this.id = window.localStorage.getItem("id");//打包的时候取消注释，第4处id
        },
        methods:{
            //初始化页面获取用户id
            // async getUserInfo(){
            //     //获取用户this.id = window.localStorage.getItem("id");//打包的时候取消注释，第4处id
            //     this.id = window.localStorage.getItem("id");//打包的时候取消注释，第4处id
            //     // this.id = 123 ;//=>打包的时候要注释掉
            //     //发送请求
            //     const  { data } = await this.$http.get(`/getUserInfo?openId=${ this.id }`);
            //     console.log(data);
            //     //如果成功
            //     if (data.success) {
            //        this.id = data.user.id;
            //        // console.log(this.id +"++++console.log下的")
            //
            //     }else{
            //         Dialog.alert({
            //             message: "提交失败",
            //         });
            //     }
            // },


            //点击提交
            async submitValue(){
                //如果没有填写信息
                if(!this.textarea){
                    Dialog.alert({
                        message: '请填写信息后再提交',
                    });
                    return
                }
                if(!this.id){
                    Dialog.alert({
                        message: '用户id没有',
                    });
                    return
                }
                const  { data }  =  await this.$http.post(`/confirmFeedback?feedback=${this.textarea}&userId=${this.id}`);

                if(data.success){
                    Dialog.alert({
                        message: '感谢您的参与',
                    }).then(()=>{
                        this.textarea = ""
                    })
                }else{
                    Dialog.alert({
                        message: '提交失败',
                    })

                }


            }

        }

    }
</script>

<style scoped>
    h2{
        padding-top:12%;
        font-size: 0.6rem;
        text-align: center;
        margin-bottom: 5%;
    }
    .opinion {
        width: 90%;
        display: block;
        margin: 0 auto;
    }
</style>