<template>
  <!-- <div class="header">
    <div class="logo">
      <text class="logo-text">MSi</text>
      <text class="logo-text2">Mjdjoutney Style index</text>
    </div>
    <div class="logo-left">
      <text>搜索你想要的风格</text>
    </div>
  </div>

  <div class="search-box">
    <input type="text" placeholder="搜索你想要的风格" />
  </div> -->

  <div class="common-layout">
    <v-header></v-header>
    <div class="main">
      <v-main></v-main>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
// vue3组件命名方式
import vHeader from "../components/Header";
import vFooter from "../components/Footer";
// import vAside from "../components/Aside";
import vMain from "../components/Main";

export default {
  components: {
    vHeader,
    vFooter,
    vMain,
  },
};
</script>

<style scoped>
.common-layout {
  height: auto;
}
</style>
