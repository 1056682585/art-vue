<template>
  <div class="index-common">
    <v-indexHeader @style="handleValue"></v-indexHeader>
    <v-indexMain :parentData="items"></v-indexMain>
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
  data() {
    return {
      items: {},
    };
  },
  methods: {
    handleValue(item) {
      this.items = item;
      console.log(this.items);
    },
  },
};
</script>

<style scoped>
.index-common {
  height: 100%;
}
</style>
