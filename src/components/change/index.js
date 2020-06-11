//数字=>时间格式化
export function dataChange(options){
    if (typeof options == "undefined") return "";

    let ary = options.toString().split(" ");
    let year = ary[3];
    let  month = ary[1];
    let  day = ary[2];

    ["Jan","Feb","Mar","Apr","May","Jun","Jul",
        "Aug","Sep","Oct","Nov","Dec"].forEach((item,index)=>{
        if(month == item){
            month = index<9?"0"+(index+1):index+1
        }
    });
    let  result = year+"-"+month+"-"+day;
    return result
}
//数字=>院区选择
export function orgIdChange(options) {
    if (typeof options == "undefined") return "";
    let orgId;
    return orgId = options ==1 ?"秦都医院":"西咸医院";
}

//输入数字 => 检查项目
export function itemChange(options) {
    if (typeof options == "undefined") return "";
    let items;
    ["NT检查","NF检查","胎儿四维超声","胎儿心脏超声","盆底超声","会诊", "输卵管造影"].forEach((item,index)=>{
       if(parseInt(options) == index+1) items = item
    });
    return items
}

//单胎/双胎  => 数字
export function fetusChange(val) {
    let item = val == "单胎"?1:2;
    return item
}



