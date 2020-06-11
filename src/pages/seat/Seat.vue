<template>
    <div class="area">
        <h1>您已选择{{ turnOrgId }}，{{ turnItem }}，{{ reserveTime }}</h1>
        <h1>请选择检查位次：</h1>

        <h2>上午</h2>
        <seat-up :upData = "seatAm" :upImg="amImg" @up = "getUp"></seat-up>
        <h2>下午</h2>
        <seat-down :downData = "seatPm"  :downImg = "pmImg" @down = "getDown"></seat-down>


        <p>请1-5号8点到医院，请6-10号10点到医院</p>
        <p>请11-15号14点到医院，请16-20号16点到医院</p>
        <p>红色为不可选，绿色为可选，黄色为您已选</p>
        <p>点击确认后不可更改</p>
        <div @click="seatNext">
            <Next></Next>
        </div>
    </div>
</template>

<script>
    //子组件
    import SeatUp from "./seatUp/SeatUp"
    import SeatDown from "./seatDown/SeatDown"
    //公用组件
    import Next from "@/components/next/Next"
    //第三方vant插件
    import { Dialog, Picker } from 'vant';
    //公共方法
    import { orgIdChange,itemChange,fetusChange } from "@/components/change"
    export default {
        name: "seat",
        components:{
            SeatUp,
            SeatDown,
            Next,
        },
        data(){
            return {
                seatAm:[ ],//=>上午的座椅
                seatPm:[ ],//=>下午的座椅
                amImg:[],//=>上午的数字小图片
                pmImg:[ ],//=>下午的数字小图片
                // amLen:"",//=>上午的预约座椅的长度
                // pmLen:"",//=>下午预约座椅的长度
                userChoose:[ ],
                doctor:"",
                orgId:"",
                reserveTime:"",
                item:"",
                turnOrgId:"",
                turnItem:"",
                seat:[],//=>
                id:"",
                menstruation:"",
                amSeat:[],//=>上午点击的座椅号
                pmSeat:[],//=>下午点击的座椅号
                seatImgData:
                    [

                        {
                            0:require("@/assets/img/seat/1.png")
                        },{
                            0:require("@/assets/img/seat/2.png")
                        },{
                            0:require("@/assets/img/seat/3.png")
                        },{
                            0:require("@/assets/img/seat/4.png")
                        },{
                            0:require("@/assets/img/seat/5.png")
                        },{
                            0:require("@/assets/img/seat/6.png")
                        },{
                            0:require("@/assets/img/seat/7.png")
                        },{
                            0:require("@/assets/img/seat/8.png")
                        },{
                            0:require("@/assets/img/seat/9.png")
                        },{
                            0:require("@/assets/img/seat/10.png")
                        },{
                            0:require("@/assets/img/seat/11.png")
                        },{
                            0:require("@/assets/img/seat/12.png")
                        },{
                            0:require("@/assets/img/seat/13.png")
                        },{
                            0:require("@/assets/img/seat/14.png")
                        },{
                            0:require("@/assets/img/seat/15.png")
                        },{
                            0:require("@/assets/img/seat/16.png")
                        },{
                            0:require("@/assets/img/seat/17.png")
                        },{
                            0:require("@/assets/img/seat/18.png")
                        },{
                            0:require("@/assets/img/seat/19.png"),
                        },
                        {
                            0:require("@/assets/img/seat/20.png"),
                        },
                        {
                            0:require("@/assets/img/seat/21.png"),
                        },
                        {
                            0:require("@/assets/img/seat/22.png"),
                        },
                        {
                            0:require("@/assets/img/seat/23.png"),
                        },
                        {
                            0:require("@/assets/img/seat/24.png"),
                        },
                        {
                            0:require("@/assets/img/seat/25.png"),
                        },
                        {
                            0:require("@/assets/img/seat/26.png"),
                        },
                        {
                            0:require("@/assets/img/seat/27.png"),
                        },
                        {
                            0:require("@/assets/img/seat/28.png"),
                        },
                        {
                            0:require("@/assets/img/seat/29.png"),
                        },
                        {
                            0:require("@/assets/img/seat/30.png"),
                        },
                        {
                            0:require("@/assets/img/seat/31.png"),
                        },
                        {
                            0:require("@/assets/img/seat/32.png"),
                        },
                        {
                            0:require("@/assets/img/seat/33.png"),
                        },
                        {
                            0:require("@/assets/img/seat/34.png"),
                        },
                        {
                            0:require("@/assets/img/seat/35.png"),
                        },
                        {
                            0:require("@/assets/img/seat/36.png"),
                        },
                        {
                            0:require("@/assets/img/seat/37.png"),
                        },
                        {
                            0:require("@/assets/img/seat/38.png"),
                        },
                        {
                            0:require("@/assets/img/seat/39.png"),
                        },
                        {
                            0:require("@/assets/img/seat/40.png"),
                        },
                        {
                            0:require("@/assets/img/seat/41.png"),
                        },
                        {
                            0:require("@/assets/img/seat/42.png"),
                        },
                        {
                            0:require("@/assets/img/seat/43.png"),
                        },
                        {
                            0:require("@/assets/img/seat/44.png"),
                        },
                        {
                            0:require("@/assets/img/seat/45.png"),
                        },
                        {
                            0:require("@/assets/img/seat/46.png"),
                        },
                        {
                            0:require("@/assets/img/seat/47.png"),
                        },
                        {
                            0:require("@/assets/img/seat/48.png"),
                        },
                        {
                            0:require("@/assets/img/seat/49.png"),
                        },
                        {
                            0:require("@/assets/img/seat/50.png"),
                        },

                    ],
            }
        },
        created(){
            //初始化页面给参数赋值
            this.id = window.localStorage.getItem("id");//=>第三处id
            this.item = this.$bus.item;
            this.orgId= this.$bus.orgId;
            this.menstruation = this.$bus.menstruation ;
            this.reserveTime = this.$bus.reserveTime;
            this.fetus = this.$bus.fetus;
            // this.fetus = 2;
            this.turnItem = itemChange(this.$bus.item);
            this.turnOrgId= orgIdChange(this.$bus.orgId);
            //初始化页面获得医院上午和下午所有空闲的座椅和医生
            this.getSeatData();
        },

        methods:{
            //点击下一步
             seatNext(){
                 //判断是否座椅全部预约完毕
                // if(this.amLen+this.pmImg == 20){
                //     Dialog.alert({
                //         message:"今天预约满了，请选择别的日期"
                //     }).then(()=>{
                //         this.$router.go(-1)
                //     })
                // }
                 //如果没有选择座椅
                if(!this.seat.length){
                    Dialog.alert({
                        message:"请先选择座位"
                    })
                }else {
                    //如果是单胎
                    if(this.fetus == 1){
                        //-1下午  1上午
                        let num =  parseInt(this.seat.slice(-1));//=>3 ["3上午']
                        let result = String(this.seat.slice(-1)).indexOf("上午");//=>['2下午']
                        this.seat = this.$bus.seat = result !== -1?num:num + this.seatAm.length;
                    }
                    //如果是双胎
                    if(this.fetus == 2){
                        //-1下午  1上午
                        let ary =  this.seat.slice(-2);//=>4
                        if(ary.length !== 2){
                            Dialog.alert({
                                message:"请选择两个座位"
                            });
                            return
                        }
                        //4上午/下午
                        let seat1 = ary[0].indexOf("上午") !== -1?parseInt(ary[0]):this.seatAm.length + parseInt(ary[0]);
                        let seat2 = ary[1].indexOf("上午") !== -1?parseInt(ary[1]):this.seatAm.length + parseInt(ary[1]);
                        this.seat = this.$bus.seat = seat1 +","+ seat2;
                    }
                    console.log(this.$bus.seat+"+++++选择的座椅号");
                    Dialog.confirm({
                        title: '温馨提示',
                        message: '您好，请按照预约时间准时前台检查，否则需要重新预约，检查前请' +
                        '排空大便，并适度憋尿',
                        confirmButtonText:"上一步",
                        cancelButtonText:"确认",
                        cancelButtonColor:"#1989fa",
                        closeOnPopstate:true
                    }).then(() => {
                        //点击上一步
                        this.$router.go(-1)
                    }).catch( async ()=>{
                        //点击确定
                        // console.log(this.seat +'+++++this.seat');
                        console.log(this.id+ '+++++this.id');
                        const { data } = await this.$http.post(`/confirmReserve?item=${this.item}&number=${this.seat}&orgId=${this.orgId}&reserveTime=${this.reserveTime}&userId=${ this.id}`);
                        //如果预约成功
                        if( data.success){
                            Dialog.alert({
                                message:"预约成功"
                            });
                            this.seat = [];
                            //获取后台数据
                            this.$bus.address = data.reserves[0].address;
                            this.$bus.code = data.reserves[0].code;
                            // this.$bus.address = res.reserves[0].address;
                            // this.$bus.address = res.reserves[0].address;
                            // this.$bus.phone = res.reserves[0].phone;
                            // this.$bus.seat = res.reserves[0].address;
                            this.$router.push(`/home/check/apply/${ this.$bus.itemName }`)
                        }else{
                            this.seat = [ ];
                            Dialog.alert({
                                title:this.turnItem+"预约失败",
                                message:data.msg
                            }).then(()=>{
                                //点击确定回到上一步从新选择预约时间this.id
                                this.$router.go(-1)
                            })
                        }
                    })
                }

            },

            //向后台发送请求获取上午和下午座位信息
            async getSeatData(){

                //判断接口参数
                let seatResult = [this.item ,this.orgId ,this.reserveTime].every(item=>{ return typeof item !== "undefined"});
                if(!seatResult){
                    console.log("参数没有获取到");
                    return
                }

                const { data } = await  this.$http.get(`/getSeatResources?item=${this.item}&orgId=${this.orgId}&reserveTime=${this.reserveTime}`);
                // console.log(data);
                console.log(this.$bus.fetus+"++++++胎儿数");
                if(data.success){
                    //遍历出上午所有的座位
                    for(let i in data.am ){
                        this.seatAm[i] = data.am[i];
                    }
                    console.log(this.seatAm)
                    this.seatAm.shift();//=>去掉开头的empty
                    let amStr = String(this.seatAm);//=>'1,0,1,0,1,0,1,...'
                    this.amLen = eval(amStr.replace(/,/g,"+"));//=>计算出上午座椅是不是预约已满
                    this.amSeat.length > 0 && this.amSeat.forEach(i => {
                        if(this.seatAm[i-1] == 1){
                            Dialog.alert({
                                message:"此座位不可选择"
                            })
                        }else {
                            this.seatAm[i - 1] = 3;
                        }
                    })
                    console.log(this.seatAm, this.amSeat,this.pmSeat,this.fetus)
                    //获取上午座椅的长度并赋值给小图片
                    let upLength = this.seatAm.length;//=>5
                    this.amImg = this.seatImgData.slice(0,upLength);
                    /*****************************************/

                    //遍历出所有下午的座椅
                    for(let i in data.pm ){
                            this.seatPm[i] = data.pm[i]
                    }
                    this.seatPm.splice(0,this.seatAm.length + 1);
                    let pmStr = String(this.seatPm);//=>'1,0,1,0,1,0,1,...'
                    this.pmLen = eval(pmStr.replace(/,/g,"+"));//=>计算出下午座椅是不是预约已满
                    let downLength = this.seatPm.length;//=>3
                    this.pmImg = this.seatImgData.slice(upLength,upLength + downLength);
                    this.pmSeat.length> 0 && this.pmSeat.forEach(i =>{
                        if(this.seatPm[i-1] == 1){
                            Dialog.alert({
                                message:"此座位不可选择"
                            })
                        }else {
    
                            this.seatPm[i-1] = 3;
                            // this.seatAm[this.amSeat-1] = 0;
    
                        }

                    })
                    //获取医生姓名
                    this.$bus.doctor = data.doctor;

                }else{
                    console.log("信息获取失败+在seat页的行");
                    return
                }
            },
            //点击上午座椅
            getUp(val){
                this.getSeatData();
                let res = this.seat.findIndex(i => {
                    return i == val
                })
                let res1 = this.amSeat.findIndex(i => {
                    return i == parseInt(val)
                })
                if(res!=-1) {
                    this.seat.splice(res, 1)
                    if(res1!== -1){
                    this.amSeat.splice(res1, 1)
                   }
                    return
                }
                
                if(this.fetus ==1){
                    this.seat = [val]
                    this.amSeat = [parseInt(val)]
                    this.pmSeat = []
                } else {
                    if(this.seat.length == 0) {
                        this.seat = [val]
                        this.amSeat = [parseInt(val)]
                        this.pmSeat = []
                    } else if (this.seat.length == 1) {
                        let k=parseInt(val)
                        let i=parseInt(this.seat[0])
                        if(k === i+1 || k === i-1){
                            this.seat.push(val)
                            this.amSeat.push(parseInt(val))
                        }else {
                            Dialog.alert({
                                message:"请选择相邻号码！"
                            })
                        }
                    }
                }
            },
            //点击下午座椅
            getDown(val){
                 this.getSeatData();
                let res = this.seat.findIndex(i => {
                    return i == val
                })
                console.log(this.pmSeat, val)
                let res1 = this.pmSeat.findIndex(i => {
                    return i == parseInt(val)
                })
                console.log(res, res1);
                
                if(res!=-1) {
                    this.seat.splice(res, 1)
                   if(res1!== -1){
                    this.pmSeat.splice(res1, 1)
                   }
                    return
                }
                
                if(this.fetus ==1){
                    this.seat = [val]
                    this.pmSeat = [parseInt(val)]
                    this.amSeat = []
                } else {
                    if(this.seat.length == 0) {
                        this.seat = [val]
                        this.pmSeat = [parseInt(val)]
                        this.amSeat = []
                    } else if (this.seat.length == 1) {
                        let k=parseInt(val)
                        let i=parseInt(this.seat[0])
                        if(k === i+1 || k === i-1){
                            this.seat.push(val)
                            this.pmSeat.push(parseInt(val))
                        }else {
                            Dialog.alert({
                                message:"请选择相邻号码！"
                            })
                        }
                       /* this.seat.push(val)
                        this.pmSeat.push(parseInt(val))*/
                    }
                }
                // this.getSeatData();
                // this.seat.push(val);
                // this.pmSeat = parseInt(val);//=5l
            },
        }
    }
</script>

<style scoped>
    h1{
        color: rgb(0,0,0);
        font-size: 0.3rem;
        margin: 5% 0 5% 5%;
    }

    p{
        color: red;
        margin-left: 0.5rem;
        font-size: 0.25rem;
        margin-top: 0.05rem;
    }

    h2{
        width: 100%;
        text-align: center;
        margin: 0.1rem auto 0.5rem;
        font-size: 0.35rem;
    }
</style>