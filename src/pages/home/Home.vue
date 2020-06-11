<template>
    <div class="container">
            <Home_banner></Home_banner>
            <Home_content></Home_content>
    </div>
</template>

<script>
    //子组件
    import Home_banner from "./home_banner/Home_banner"
    import Home_content from "./home_content/Home_content"
    //公用组件
    export default {
        name: "home",
        components:{
            Home_banner,
            Home_content,

        },
        data(){
            return { }
        },
        methods:{ }
    }
</script>

<style scoped>
    .container{
        height: 100vh;
    }
</style>