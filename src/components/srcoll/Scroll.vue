<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from "@better-scroll/core"
    export default {
        name: "scroll",
        data(){
          return {
              scroll:null
          }
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:true,
            });
            console.log(this.scroll)
        }
    }
</script>

<style scoped>

</style>