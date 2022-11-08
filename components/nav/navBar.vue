<template lang="">
    <div>
        <mainNav v-if="num===1"></mainNav>
        <reservationNavVue v-if="num===2"></reservationNavVue>
    </div>
</template>
<script>
import mainNav from './mainNav.vue';
import { mapActions, mapGetters, mapMutations } from "vuex";
import reservationNavVue from './reservationNav.vue';
export default {
    components: { mainNav,reservationNavVue },
    computed: {
        ...mapGetters( "navBar",{
            num:"getNum"
        })
    },

}
</script>
<style lang="">
    
</style>