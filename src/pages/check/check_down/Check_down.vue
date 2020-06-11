<template>
    <el-form >
        <el-form-item v-for="(item,index) in checkData_2" :key="index">
            <div class="item-check" :class="[index==0?'isActive':'']">
                <div class="item-check-1">
                    <img :src="item.src">
                </div>
                <div class="item-check-2">
                        <el-date-picker
                                        v-if="index==0"
                                        v-model="menses"
                                        type="date"
                                        :placeholder="item.title"
                                        :picker-options="pickerOptions"
                                        @change="checkDown(index,$event)">
                        </el-date-picker>
                    <el-select v-model="value" :placeholder="item.title"
                               @change="checkDown(index,$event)"
                               v-else>
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                    </el-select>
                </div>
            </div>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "check_down",
        props:{
            down:{ },
        },
        data(){
            return{
                aryDown :[],
                lenDown:0,//=>down的长度
                value: '',
                menses:"",
                options: [
                    {
                        value: '单胎',
                        label: '单胎'
                    }, {
                        value: '双胎',
                        label: '双胎'
                    }
                ],
                checkData_2:[
                    {
                        src:require("@/assets/img/check/4.png"),
                        title:"请输入您的末次月经"
                    },
                    {
                        src:require("@/assets/img/check/5.png"),
                        title:"请选择胎儿数"
                    },
                ],
                //禁止时间大于今天的
                pickerOptions: {
                    disabledDate: (time) => {
                        return  time> new Date()
                    }
                }
            }
        },
        created(){
            // clearTimeout(timer);
            // let timer = setTimeout(()=>{
            //     this.menses = this.down.menstruation;
            //     if(this.down.fetus == 1){
            //         this.value = "单胎"
            //     }
            //     if(this.fetus == 2 ){
            //         this.value = "双胎"
            //     }
            // },300);

        },

        methods:{
            //获取月经和胎儿的数据
            checkDown(index,e){
                index == 0?this.$bus.menstruation = e:"";
                index == 1?this.$bus.fetus = e:"";
                this.aryDown[index] = e;
                //获取lenDown的长度
                this.lenDown = this.aryDown.length

            }
        }
    }
</script>

<style>


</style>