<template>
  <div class="header">
    <div class="logo">
      <text class="logo-text">MSi</text>
      <text class="logo-text2">Mjdjoutney Style index</text>
    </div>
    <div class="e-input">
      <el-input class="input" prefix-icon="Search" size="large" />
    </div>
    <div class="right">
      <text class="right-logo">搜索你想要的艺术风格</text>
    </div>
  </div>
</template>

<script>
export default {
  name: "vHeader",
};
</script>

<style scoped>
/* 刚创建完新项目时，元素会与浏览器出现缝隙边距，需要去index.html页面中去设置样式 */
.header {
  position: relative;
  height: 70px;
  /* height: 10%; */
  width: 100%;
  background: #ffffff;
  margin: 0;
}

.header .logo {
  float: left;
  height: 100%;
  width: 175px;
  /* background-color: aqua; */
}
.header .logo .logo-text {
  display: flex;
  height: 55%;
  width: 200px;
  justify-content: center;
  /* 让flex弹性盒子元素在最底部 */
  font-size: 30px;
  font-weight: 900;
  font-family: "Arial";
  /* background-color: blue; */
}
.header .logo .logo-text2 {
  display: flex;
  /* background-color: red; */
  font-size: small;
  justify-content: center;
  font-weight: 100;
  height: 45%;
  width: 200px;
}
.header .right {
  width: 50%;
  height: 100%;
}
.header .right text {
  width: 250px;
  height: 20px;
  display: flex;
  padding-top: 15px;
  align-items: center;
  justify-items: center;
  font-size: small;
  font-weight: 530;
  letter-spacing: 6px;
}

/* .search-box {
  width: 100%;
  height: 900px;
  background-color: rgb(233, 233, 233);
  text-align: center;
} */

/* .search-box input {
  width: 300px;
  height: 35px;
  margin-top: 20px;
} */
/* 使样式生效 */
:deep(.el-input__prefix .el-icon) {
  color: rgb(72, 190, 208);
  font-weight: 900;
}
/* 使样式生效 */
:deep(.el-input__wrapper) {
  border-radius: 20px;
  box-shadow: 0 0 4px rgb(212, 210, 210);
  background-color: rgb(242, 240, 240);
}
.input {
  float: left;
  width: 300px;
  height: 30px;
}
.e-input {
  /* position: relative; */
  display: flex;
  float: right;
  width: 400px;
  height: 40px;
  margin-right: 30%;
  margin-top: 20px;
}
</style>
