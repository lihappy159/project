import axios from "axios"

const http = axios.create({
    baseURL:"http://115.29.37.212:8888/jeeplus1/appBackData",
    headers:{
        "Content-Type": "application/json;charset=UTF-8"
    },
});


const wxhttp = axios.create({
    baseURL:"http://sanmi.yuechong.vip/jeeplus1",

});

http.interceptors.response.use(function (response) {
    //这里的code是状态码，不是微信请求的code

    let res = response.data;

    if(res.code !== 200){
        alert(res.msg)
    }
    //最容易忘掉return
    return response;
},function (error) {
    return  Promise.reject(error)
});


export  { http,wxhttp }






