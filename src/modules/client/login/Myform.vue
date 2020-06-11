<template>
    <div>
        <ul>
            <li v-for="(item,index) in  formData"  :key="index">
                <el-card class="form-card">
                    <div slot="header" >
                        <span><strong>检查编号:{{ item.code }}</strong></span>
                        <div class="form-card-common">
                            <div>末次月经:{{ item.menstruation }}</div>
                            <div>胎儿数量:{{ item.fetus == 1?"单胎":"双胎" }}</div>
                        </div>
                        <div class="form-card-common">
                            <div>电话号码:{{ item.phone }}</div>
                            <div>时间:{{ item.reserveTime}}</div>
                        </div>
                        <div class="form-card-common">
                            <div v-if="item.inspectionItems == 1">检查项: NT检查 </div>
                            <div v-else-if="item.inspectionItems == 2">检查项: NF检查 </div>
                            <div v-else-if="item.inspectionItems == 3">检查项: 胎儿四维超生 </div>
                            <div v-else-if="item.inspectionItems == 4">检查项: 胎儿心脏超生</div>
                            <div v-else-if="item.inspectionItems == 5">检查项: 盆底超生</div>
                            <div v-else="item.inspectionItems == 6">检查项: 会诊</div>

                            <div>位次:{{ item.reserveNumber }}号</div>
                        </div>
                        <div>地址:{{ item.address }}</div>
                    </div>
                    <div >
                        检查结果:{{ item.inspectionResult==1?"未检查":"检查" }}
                    </div>
                </el-card>
            </li>
        </ul>
    </div>

</template>

<script>
    //第三方插件
    import { Dialog } from 'vant';

    export default {
        name:"mform",
        data(){
            return {
                formData:[],
                loading: false,
                pageNo:1,
                pageSize:120,
                id:"",
            }
        },
        // computed: {
        //     noMore () {
        //         return  this.formDataLen <this.pageSize
        //     },
        //     disabled (){
        //             return this.loading || this.noMore
        //     }
        // },
        created(){
            this.id = window.localStorage.getItem('id');
            this.initMform();
        },
        methods:{
            //初始化mForm页面
            async initMform() {
                //如果数据不存在
                if (typeof this.id == "undefined"){
                    console.log(this.id + "++id没有获取到" );
                    return;
                }
                const { data } = await this.$http.get(`/getReserveList?pageNo=${this.pageNo}&pageSize=${this.pageSize}&userId=${this.id}`);
                console.log(data);
                if(data.success){
                    this.formData = data.data;
                }else{
                    Dialog.alert({
                        message:"加载失败"
                    });
                }

            },
            // load () {
            //     // this.initMform();
            //     this.loading = true;
            //
            //     setTimeout(() => {
            // //         this.initMform();
            //         this.loading = false
            //     }, 3000);
            // },
        }
    }

</script>

<style scoped>
    .infinite-list-wrapper{
        width: 90%;
        margin: 0.5rem auto ;
    }
    .infinite-list-wrapper span{
        font-size: 0.4rem;
    }
    .form-card-common{
        display: flex;
        justify-content:left;
        margin: 0.15rem auto;
    }
    .form-card-common div:nth-child(1){
        width: 3.28rem;
    }
    .form-card-common div:nth-child(2){
        width: 44%;
    }
    .infinite-list-wrapper P {
        font-size: 0.3rem;
        text-align: center;
    }
    b, strong{
        font-size: 0.3rem;
    }
</style>