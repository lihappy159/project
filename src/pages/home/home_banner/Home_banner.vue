<template>
    <div class="banner">
        <img :src="banner">
    </div>
</template>

<script>
    export default {
        name: "home_banner",
        data(){
            return {
                banner:require("@/assets/img/home/banner.png"),
            }
        }
    }

</script>

<style scoped>
    .banner img{
        width: 100%;
        height: 100%;
    }
</style>