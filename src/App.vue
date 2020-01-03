<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<script>
import Vue from "vue";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import locale from 'iview/dist/locale/es-ES';
// Vue.use(VueRouter);
Vue.use(ViewUI, {locale: locale});


export default {};
</script>
<style></style>
