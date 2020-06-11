<template>
    <!--<TabBar>-->
        <!--<TabBarItem path="/home"  class="tabBarItem">-->
            <!--<img slot ="item-icon" src="~@/assets/img/TabBar/Appointment.png">-->
            <!--<img slot ="item-icon-active" src="~@/assets/img/TabBar/Appointment_c.png">-->
            <!--<div slot="item-text">预约</div>-->
        <!--</TabBarItem>-->

        <!--<TabBarItem path="/client" class="tabBarItem">-->
            <!--<img slot ="item-icon" src="~@/assets/img/TabBar/Suggestion.png">-->
            <!--<img slot ="item-icon-active" src="~@/assets/img/TabBar/Suggestion_c.png">-->
            <!--<div slot="item-text">建议</div>-->
        <!--</TabBarItem>-->

        <!--<TabBarItem path="/console" class="tabBarItem">-->
            <!--<img slot ="item-icon" src="~@/assets/img/TabBar/console.png">-->
            <!--<img slot ="item-icon-active" src="~@/assets/img/TabBar/mine_c.png">-->
            <!--<div slot="item-text">我的</div>-->
        <!--</TabBarItem>-->

    <!--</TabBar>-->
</template>

<script>
    import TabBar from "@/components/tabbar/TabBar"
    import TabBarItem from "@/components/tabbar/TabBarItem"
    export default {
        name: "main-tab-bar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>
    .tabBarItem img{
        width: 30%;
    }
</style>