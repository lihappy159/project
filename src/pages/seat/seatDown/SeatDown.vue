<template>
    <van-grid :column-num="5" :gutter="10" :border="false">
        <van-grid-item v-for="(item,index) in downData" :key="index" @click="seatDown(index)">
            <img class="item" src="@/assets/img/seat/seat_1.png" v-if="downData[index]==0" >
            <img class="item" src="@/assets/img/seat/seat_2.png" v-else-if="downData[index]==1" >
            <img class="item" src="@/assets/img/seat/seat.png" v-else />
            <img :src="downImg[index][0]" style="width: 0.4rem;height: 0.4rem"/>
        </van-grid-item>
    </van-grid>

</template>

<script>
    // import { orgIdChange,itemChange  } from "@/components/change"
    export default {
        name: "seat-down",
        props:{
            downData:"",//=>[0,0,0,0,0]
            downImg:"",//=>[img1,img2,img3,img4,img5]
        },
        data(){
            return { }
        },

        methods:{
            //点击下午座位
            seatDown(index){
                this.$emit("down",index+1+"下午");

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