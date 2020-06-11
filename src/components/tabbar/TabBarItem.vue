<template>
        <div class="tab-bar-item" @click="itemClick">
            <div v-if="isActive"><slot name="item-icon-active"></slot></div>
            <div v-else><slot name="item-icon"></slot></div>
            <div :class= "[isActive?'activeStyle':'']"><slot name="item-text"></slot></div>
        </div>
</template>

<script>

    export default {
        name: "tab-bar-item",
        props:{
            path:String,
        },

        data(){
            return {
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            },

        },
        methods:{
            itemClick(){
               this.$router.push(this.path);
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
    }
    .activeStyle{
        border-bottom: 5px solid #b3b3b3;
        color:#5bc494;
    }
</style>