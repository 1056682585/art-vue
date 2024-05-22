<template>
  <div class="index-common">
    <v-indexHeader></v-indexHeader>
    <v-indexMain></v-indexMain>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from "../components/Footer";
import vIndexHeader from "../components/IndexHeader";
import vIndexMain from "../components/IndexMain";
export default {
  components: {
    vFooter,
    vIndexHeader,
    vIndexMain,
  },
};
</script>

<style scoped>
.index-common {
  height: 100%;
}
</style>
