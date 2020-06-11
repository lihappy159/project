<template>
  <el-form :model="addForm" :rules="addFromRules">
    <el-form-item :prop="item.title" v-for="(item,index) in checkData" :key="index">
      <div class="item-check" :class="[index==0?'isActive':'']">
        <div class="item-check-1">
          <img :src="item.src" />
        </div>
        <div class="item-check-2">
          <el-input
            :placeholder="item.text"
            v-model="addForm['name']"
            clearable
            @change="checkUp(index,$event)"
            v-if="index ==0"
          ></el-input>
          <el-input
            :placeholder="item.text"
            v-model="addForm['idCard']"
            clearable
            @change="checkUp(index,$event)"
            v-else-if="index ==1"
          ></el-input>
          

          <!-- <el-date-picker -->
          <!-- :picker-options="pickerOptions" -->
          <!-- v-model="addForm['birth']" -->
          <!-- :placeholder="item.text" -->
          <!-- @change="checkUp(index,$event)" -->
          <!-- v-else-if="index ==1"> -->
          <!-- </el-date-picker> -->

          <el-input
            type="age"
            v-model.number="addForm['phone']"
            clearable
            :placeholder="item.text"
            @change="checkUp(index,$event)"
            v-else
          ></el-input>
        </div>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
import { Dialog } from "vant";

export default {
  name: "check_up",
  components: {},
  props: {
    up: {}
  },
  data() {
    return {
      aryUp: [],
      lenUp: 0, //=>上部分的长度
      addForm: {
        name: "",
        idCard: "",
        phone: ""
      },
      checkData: [
        {
          src: require("@/assets/img/check/1.png"),
          title: "name",
          text: "请输入您的姓名"
        },
        {
          src: require("@/assets/img/check/2.png"),
          title: "idCard",
          text: "请输入您的身份证"
        },
        {
          src: require("@/assets/img/check/3.png"),
          title: "phone",
          text: "请输入您的电话"
        }
      ],
      //姓名和电话的规则验证
      addFromRules: {
        name: [
          { required: true, message: "请输入您的姓名", trigger: "blur" },
          { min: 2, max: 12, message: "姓名长度在2-12字之间", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入您的手机号", trigger: "blur" }
        ],
        idCard: [
          { required: true, message: "请输入您的身份证", trigger: "blur" }
        ]
      },
      //禁止时间大于今天的
      pickerOptions: {
        disabledDate: time => {
          return time > new Date();
        }
      }
    };
  },
  created() {
    // clearTimeout(timer);
    // let timer = setTimeout(()=>{
    //     this.addForm.name = this.up.name;
    //     this.addForm.birth = this.up.birth;
    //     this.addForm.phone = this.up.phone
    // },300);
    // console.log("这是check1的父传子up的数据");
    // console.log(this.up)
    // this.addForm.name = this.up.name;
    // this.addForm.birth = this.up.birth;
    // this.addForm.phone = this.up.phone
  },
  methods: {
    //填写checkup信息
    checkUp(index, e) {
      //给aryUp添加(姓名，生日，电话)
      this.aryUp[this.aryUp.length] = e;
      index == 0 ? (this.$bus.name = e) : null;
    //   index == 1 ? (this.$bus.birth = e) : null;
      //电话正则验证规则
      const regMobile = /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      const card = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        if(index == 1) {
            console.log(card.test(e))
            card.test(e) ? this.$bus.idCard = e : this.aryUp.length--;
        }
 
      //判断电话号码的长度和格式
      if (index == 2) {
        //如果手机长度不够，aryUp的长度-1
        e.length !== 11 ? this.aryUp.length-- : null;
        //如果手机格式不对，aryUp的长度-1
        regMobile.test(e) ? null : this.aryUp.length--;
        this.$bus.phone = e;
      }
      //得到aryUp的长度
      this.lenUp = this.aryUp.length;
      console.log(this.lenUp)
    }
  }
};
</script>

<style>
</style>