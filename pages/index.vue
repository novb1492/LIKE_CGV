<template>
    <Tutorial/>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: 'IndexPage',
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    return {test:'aa'};
  },
  mounted(){
    this.changeNav(1);
  },
  methods:{
    ...mapMutations("navBar", {
      changeNav: "changeNav",
    })
  }
}
</script>
