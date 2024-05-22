<template>
  <div class="main">
    <div class="e-input">
      <el-input class="input" prefix-icon="Search" size="large" />
    </div>
    <div class="img-box">
      <div class="one">
        <div class="squ"></div>
        <div class="len"></div>
      </div>
      <div class="one">
        <div class="len-two"></div>
        <div class="squ-two"></div>
      </div>
      <div class="one">
        <div class="squ"></div>
        <div class="len"></div>
      </div>
      <div class="one">
        <div class="len-two"></div>
        <div class="squ-two"></div>
      </div>
      <div class="one">
        <div class="squ"></div>
        <div class="len"></div>
      </div>
      <div class="one">
        <div class="len-two"></div>
        <div class="squ-two"></div>
      </div>
      <div class="one">
        <div class="squ"></div>
        <div class="len"></div>
      </div>
    </div>
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
  width: 100%;
  /* 主题色调 */
  background-color: rgb(233, 232, 232);
}
/* v-deep用来定义input内部图标的样式，否则不生效 */
:deep(.el-input__prefix .el-icon) {
  color: rgb(72, 190, 208);
  font-weight: 900;
}
.e-input {
  padding-top: 50px;
  margin-left: 35%;
  width: 30%;
}
/* 使样式生效 */
:deep(.el-input__wrapper) {
  border-radius: 20px;
  box-shadow: 0 0 4px rgb(212, 210, 210);
}
.img-box {
  /* 居中显示 */
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 1100px;
  height: 400px;
  /* background-color: aqua; */
}
.one {
  height: 400px;
  width: 150px;
  float: left;
}
.squ {
  width: 140px;
  height: 140px;
  background-color: rgb(204, 209, 209);
  border-radius: 25px;
}
.len {
  margin-top: 10px;
  width: 140px;
  height: 250px;
  background-color: rgb(204, 209, 209);
  border-radius: 25px;
}
.squ-two {
  margin-top: 10px;
  width: 140px;
  height: 140px;
  background-color: rgb(204, 209, 209);
  border-radius: 25px;
}
.len-two {
  width: 140px;
  height: 250px;
  background-color: rgb(204, 209, 209);
  border-radius: 25px;
}
</style>
