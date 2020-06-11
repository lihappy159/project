<template>
    <div class="date">
        <h2 class="title">下列日期是您将要检查项目的最佳时间段，请选择:</h2>
            <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    title="选择年月日"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @change="changeEvent"

            />
        <div @click ="dateNext">
                <Next></Next>
        </div>
    </div>
</template>

<script>
    //公共组件
    import Next from "@/components/next/Next"
    //公共方法
    import { dataChange } from "@/components/change";
    import { Dialog, Picker } from 'vant';
    export default {
        name: "date",
        components:{
            Next  },
        data() {
            let item=this.$bus.item;
            var min =new Date();
            var c=new Date(this.$bus.menstruation);
            // console.log(c.getFullYear()+'-'+c.getMonth()+'-'+c.getDay())
            var d=new Date(this.$bus.menstruation);//时间限制的周数后期需要从后台接口获取
            var max=new Date(new Date().getFullYear(), new Date().getMonth()+12, 30);
            if(item == 1){
                min=new Date(c.setDate(c.getDate()+11*7+1));
                max=new Date(d.setDate(d.getDate()+13*7));
            }else if(item == 2){
                min=new Date(c.setDate(c.getDate()+15*7+1));
                max=new Date(d.setDate(d.getDate()+18*7));
            }else if(item == 3){
                min=new Date(c.setDate(c.getDate()+21*7+1));
                max=new Date(d.setDate(d.getDate()+23*7));
            }else if(item == 4){
                min=new Date(c.setDate(c.getDate()+23*7+1));
                max=new Date(d.setDate(d.getDate()+25*7));
            }else if(item == 5){
                min=c;
                max=new Date(d.setDate(d.getDate()+7));
            }
            // console.log(min.getFullYear()+'-'+min.getMonth()+'-'+min.getDay())
            // console.log(max.getFullYear()+'-'+max.getMonth()+'-'+max.getDay())
            return {
                minDate: min,
                maxDate: max,
                reserveTime:"",
                reChoiceTime:"",
                currentDate:min
            };
        },
        created(){
            this.$bus.reserveTime = dataChange(this.currentDate)
            // console.log("这里是默认的预约时间")
            // console.log(this.$bus)
        },
        methods:{
            //选择时间
            changeEvent(){
                this.$bus.reserveTime = dataChange(this.currentDate);
                // console.log("这里是点击事件选择器后的预约时间")
                // console.log(this.$bus)
            },
            //点击下一步
            dateNext(){
                var d=this.currentDate;
                // console.log(d.getFullYear()+'-'+d.getMonth()+'-'+d.getDay())
                var c=new Date();
                if( d==c  || d < c){
                    Dialog.alert({
                        message:"该项目时间已过，不能预约！"
                    })
                }else {
                    this.$router.push(`/home/check/seat/${this.$bus.itemName}`)
                }
            }
        },

    }
</script>

<style scoped>
    h2{
        color: rgb(0,0,0);
        font-size: 0.5rem;
        line-height:0.8rem;
        border-bottom: 1px solid #DCDFE6;
        padding-bottom: 1rem;
        margin: 1rem 1rem 0 0.5rem;

    }
</style>