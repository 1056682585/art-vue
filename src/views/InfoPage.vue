<template>
  <div class="info-page">
    <v-header></v-header>
    <v-main></v-main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "../components/Header";
import vMain from "../components/InfoMain";
import vFooter from "../components/Footer.vue";
export default {
  components: {
    vHeader,
    vMain,
    vFooter,
  },
};
</script>

<style></style>
