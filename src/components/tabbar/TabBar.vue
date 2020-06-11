<template>
    <div class="tab-bar">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "bottom",
    }
</script>

<style scoped>
    .tab-bar{
             display: flex;
             font-size: 15px;
             position: fixed;
             left: 0;
             right: 0;
             bottom: 0;
             border-top: 1px solid #b3b3b3 ;
             padding-top:3px;
             background-color: #ffffff;
             height: 85px;
    }


</style>