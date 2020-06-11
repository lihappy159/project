<template>
    <div class="zone">
            <h2>请选择就诊院区:</h2>
        <div class="zone_content" v-for="(item,index) in zoneData" :key="index">
                <div class="imgControl" @click="imgEvent(index)">
                    <img :src="item.src[0]" v-if="imgFlag">
                    <img :src="item.src[1]" v-else>
                </div>
                <div>
                    <span>{{item.name}}</span><span style="color: rgb(91,175,196);cursor: pointer">导航</span>
                </div>

                <baidu-map :center="qindu" :zoom="zoom"
                           @ready="handler_qindu" style="height:2.5rem;width: 85%;margin: 0.3rem auto"
                           :scroll-wheel-zoom='true' v-if="index==0">
                </baidu-map>

                <baidu-map :center="xixian" :zoom="zoom"
                           @ready="handler_xixian" style="height:2.5rem;width: 85%;margin: 0.3rem auto 74pt"
                           :scroll-wheel-zoom='true' v-else>
                </baidu-map>
            </div>

        <div @click = "zoneNext">
                <Next></Next>
        </div>
    </div>
</template>

<script>
    import Next from "@/components/next/Next"
    export default {
        name: 'zone',
        components:{
            Next,
        },
        data () {
            return {
                qindu: {lng: 108.707104, lat: 34.335266},
                xixian: {lng: 108.734992, lat: 34.314661},
                zoom: 18,
                imgFlag:true,
                orgId:"",
                zoneData:[
                    {
                        src:{
                            0:require("@/assets/img/zone/check_1.png"),
                            1:require("@/assets/img/zone/unchecked_1.png")
                        },
                        name:"秦都医院"
                    },
                    {
                        src:{
                            0:require("@/assets/img/zone/unchecked_1.png"),
                            1:require("@/assets/img/zone/check_1.png")
                        },
                        name:"西咸医院"
                    }
                ]
            }
        },
        created(){
            this.$bus.orgId = 1;
        },
        methods: {
            //图片切换事件
            imgEvent(imgOptions){
                this.imgFlag = !this.imgFlag;
                this.$bus.orgId = imgOptions+1;
            },
            //下一步点击
            zoneNext(){
                this.$router.push(`/home/check/date/${this.$bus.itemName }`)
            },


            handler_qindu ({BMap, map}) {
                var point = new BMap.Point(this.qindu.lng, this.qindu.lat);
                map.centerAndZoom(point, this.zoom);
                var marker = new BMap.Marker(point); // 创建标注
                map.addOverlay(marker) ;// 将标注添加到地图中
                var circle = new BMap.Circle(point, 6, { strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' });
                map.addOverlay(circle)
            },
            handler_xixian ({BMap, map}) {
                var point = new BMap.Point(this.xixian.lng, this.xixian.lat);
                map.centerAndZoom(point, this.zoom);
                var marker = new BMap.Marker(point); // 创建标注
                map.addOverlay(marker) ;// 将标注添加到地图中
                var circle = new BMap.Circle(point, 6, { strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' });
                map.addOverlay(circle)
            },
        }
    }
</script>

<style scoped>
    h2{
    color: rgb(0,0,0);
    font-size: 0.4rem;
    margin: 0.5rem 0 0.5rem 0.2rem;
    }
    .zone span{
        padding-left: 0.2rem;
        font-size: 0.3rem;
    }
    .zone img{
        vertical-align: middle;
        padding-left: 0.5rem;
    }
    .zone_content{
        display: flex;
        flex-wrap: wrap;
    }
</style>