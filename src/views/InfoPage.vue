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
// import axios from "axios";
export default {
  components: {
    vHeader,
    vMain,
    vFooter,
  },
  // data() {
  //   return {
  //     list: [],
  //   };
  // },
  // created() {
  //   this.loadEvent();
  // },
  // methods: {
  //   loadEvent() {
  //     axios
  //       .get("http://101.37.124.37:8090/art")
  //       .then((response) => {
  //         this.list = response.data;
  //         console.log(this.list[0].name);
  //       })
  //       .catch((error) => {
  //         console.error("请求出错" + error);
  //       });
  //   },
  // },
};
</script>

<style></style>
