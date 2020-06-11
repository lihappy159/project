<template>
    <div class="apply">
            <div class="apply-card">
                <div class="clearfix">
                    <h2><strong>检查申请表</strong></h2>
                    <div>姓名:<i></i>{{ name }}<span>年龄：<i></i>{{ age }}</span></div>
                    <div>末次月经:<i></i>{{ menstruation }}</div>
                    <div>胎儿数:<i></i>{{ fetus==1?"单胎":"双胎" }}</div>
                    <div>电话号码:<i></i>{{ mobile }}</div>
                </div>
                <div class="clearfix">
                    <div>检查项:<i></i>{{ item }}</div>
                    <div>时间:<i></i>{{ reserveTime }} {{ detailDay}}</div>
                    <div>位次:<i></i>{{seat + "号" }}</div>
                    <div>地址:<i></i>{{orgId }}</div>
                    <div id="doctor">医生签名:<i></i>{{ doctor }}</div>
                </div>

            </div>
        <p>
                请保存此界面，届时凭此缴费
            </p>
            <router-link style="margin: 1.2rem 0.5rem;" to="/home">
                   <Enter></Enter>
            </router-link>

    </div>
</template>

<script>
    //公共方法
    import { orgIdChange,itemChange,dataChange ,fetusChange} from "@/components/change"
    //子组件
    import Enter from "../../components/next/Enter"
    export default {
        name: "apply",
        components:{
            Enter
        },
        data(){
            return {
                name:"",
                age:"",
                menstruation:"",
                fetus:"",
                mobile:"",
                item:"",
                reserveTime:"",
                seat:"",
                orgId:"",
                doctor:"",
                detailDay:"上午",//=>上午还是下午
            }
        },
        created(){
            this.initApply()
        },
        methods:{
            //初始化页面
            initApply(){
                this.name = this.$bus.name;
                this.age = this.$bus.age;
                this.fetus = this.$bus.fetus;
                console.log(this.$bus);
                this.mobile = this.$bus.phone;
                this.reserveTime = this.$bus.reserveTime;
                this.seat = this.$bus.seat;
                this.doctor = this.$bus.doctor;

                this.menstruation = this.$bus.menstruation;
                this.item = itemChange(this.$bus.item);
                this.orgId = orgIdChange(this.$bus.orgId);
                this.detailDay=this.seat>10?"下午":"上午";
            }
        },
    }
</script>

<style scoped>
    .apply{
        height: 100%;
        width: 100%;
    }

    #doctor{
        margin-left: 60%;
        margin-top: 14%;
    }
    .apply-card {
        width: 90%;
        margin:  5% auto;
        font-size: 0.3rem;
        color: black;
        height: 8.8rem;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }

    .apply h2{
        text-align: center;
        padding-top: 7%;
        padding-bottom: 7%;
        font-size: 0.5rem;
    }
    p{
        color: red;
        padding-left: 5%;
        margin-top: 5%;
        font-size: 0.3rem;
    }
    .clearfix{
        margin-bottom: 5%;
        margin-top: 5%;
    }
    .clearfix div{
        margin-bottom: 2%;
        padding-left: 4%;
    }
    .clearfix div span{
        padding-left: 33%;
    }

   i{
     padding-right:0.15rem;
   }

</style>