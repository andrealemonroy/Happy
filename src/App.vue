<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Vue from "vue";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import locale from "iview/dist/locale/es-ES";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(ViewUI, { locale: locale });

export default {};
</script>
<style></style>
