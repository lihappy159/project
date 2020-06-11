<template>
    <van-grid :column-num="5" :gutter="10" :border="false">
        <van-grid-item v-for="(item,index) in upData" :key="index" @click="seatUp(index)">
            <img class="item" cla src="@/assets/img/seat/seat_1.png" v-if="upData[index]==0" >
            <img class="item" src="@/assets/img/seat/seat_2.png" v-else-if="upData[index]==1" >
            <img class="item" src="@/assets/img/seat/seat.png" v-else />
            <img :src="upImg[index][0]" style="width: 0.4rem;height: 0.4rem"/>
        </van-grid-item>
    </van-grid>
</template>

<script>
    export default {
        name: "seat-up",
        props:{
            upData:"",
            upImg:""
        },
        data(){
            return {
            }
        },

        methods:{
            //获取上午点击座位信息
            seatUp(index){
                // console.log(this.upData+"88888888888888");
                // this.upData[index] = 3;
                this.$emit("up",index+1+"上午");

            },


        }
    }
</script>

<style scoped>
.item {
    width: 36px;
    height: 33px;
    margin-bottom: 5px;;
}

</style>