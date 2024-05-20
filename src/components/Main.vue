<template>
  <div class="main">
    <el-input prefix-icon="Search" size="large" placeholder="Please Input" />
  </div>
</template>

<script>
// import { Search } from "@element-plus/icons-vue";
export default {
  name: "vMain",
  data() {
    return {
      // 引入图标用的
    };
  },
};
</script>

<style scoped>
.main {
  height: 705px;
  /* 主题色调 */
  background-color: rgb(233, 232, 232);
}
::v-deep .el-input__prefix .el-icon {
  color: rgb(72, 190, 208);
  font-weight: 900;
}
</style>
