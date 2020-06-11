<template>
    <div class="list">
        <!-- <div class="list-0" @click="reserveClick(1)">
            <img src="@/assets/img/home/block1.png">
            <div class="list-text-left">NT检查</div>
        </div> -->
        <div class="list-2">
            <div class="list-2-left" @click="reserveClick(1)">
               <img src="@/assets/img/home/block1.png">
            <div class="list-text-left">NT检查</div>
            </div>
            <div class="list-2-right" @click="reserveClick(2)">
                <img src="@/assets/img/home/block2.png">
                <div class="list-text">NF检查</div>
            </div>
        </div>
        <div class="list-1">
            <div class="list-1-left" @click="reserveClick(3)">
                <img src="@/assets/img/home/block3.png">
                <div class="list-text-right">胎儿四维超声</div>
            </div>
            <div class="list-1-right" @click="reserveClick(4)">
                 <img src="@/assets/img/home/block4.png">
                <div class="list-text">胎儿心脏超声</div>
            </div>
        </div>
        <div class="list-2">
            <div class="list-2-left" @click="reserveClick(5)">
                 <img src="@/assets/img/home/block5.png">
                <div class="list-text">盆底超声</div>
            </div>
            <div class="list-2-right" @click="reserveClick(7)">
                <img src="@/assets/img/home/block7.png">
                <div class="list-text-right">输卵管造影</div>
            </div>
        </div>
        <div class="list-3" @click="reserveClick(6)">
            <img src="@/assets/img/home/block6.png">
            <div class="list-text-t">会诊</div>
        </div>

    </div>

</template>

<script>
    import { dataChange,itemChange } from "@/components/change/index"
    export default {
        name: "home_content",
        data(){
            return {
                item:"",
                openid:"",//=>打包取消注释
                // openid:111111285689681,//=打包要注释掉,

            }
        },
        created() {
            //data数据先生成
            //  this.$bus.openid = this.openid;//=>打包要注释掉
            this.openid = window.localStorage.getItem("openid");//=>打包取消注释
            this.reserveClick()

        },
        methods:{
            //点击具体检查项目
             async reserveClick(index){
                 //$bus获取检查项目item
                //  this.$bus.item = index;
                //  this.$bus.itemName = itemChange(index);
                 //发送openID获取用户信息
                const {data} = await this.$http.get(`/getUserInfo?openId=${ this.openid }`);
                    //如果是老用户
                    if(data.flag) {
                        console.log("这是老用户，在home1页");
                        window.localStorage.setItem("id",data.user.id);//=>第1处id
                        this.$bus.name = data.user.name;
                        this.$bus.photo = data.user.photo;
                        this.$bus.birth = data.user.birth;
                        this.$bus.phone = data.user.phone;
                        this.$bus.fetus = data.user.fetus;
                        // this.$bus.menstruation = data.user.menstruation;
                        this.$bus.age = data.user.age;
                        // this.$router.push(`/home/check/zone/${ this.$bus.itemName }`)
                    }
                    else {
                        //这是新用户
                        console.log("这是新用户,在home1的");
                        // this.$router.push(`/home/check/${ this.$bus.itemName }`)
                        this.$router.push(`/home/check/user`)
                    }

            },

        }
    }
</script>

<style scoped>
    .list{
        width: 90%;
        margin: 11px auto;
        color: #ffffff;
        font-size: 0.4rem;
    }
    .list img{
        vertical-align: middle;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
    .list-1,.list-2{
        display: flex;
        justify-content: space-between;
        margin: 11px auto;
    }
    .list-1-left,.list-2-right{
        width: 54%;
    }
    .list-1-right,.list-2-left {
        width: 44%;
        white-space:nowrap;
    }
    .list-1-right,.list-1-left,.list-2-left,.list-2-right,.list-0,.list-3{
        position: relative;
    }
    .list-text {
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
    }
    .list-text-left,.list-text-right{
        position: absolute;
        bottom: 10%;
    }
    .list-text-left{
        left: 20%;
    }
    .list-text-right{
        right: 20%;
    }
    .list-text-t {
         position: absolute;
        bottom: 10%;
        left: 36%;
    }
</style>