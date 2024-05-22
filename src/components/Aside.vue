<template>
  <div class="aside">
    <div class="line"></div>
    <span class="v-span">艺术风格</span>
    <div class="div-span">
      <span>古典主义</span>
      <span>浪漫主义</span><br />
      <span>印象主义</span>
      <span>表现主义</span><br />
      <span>立体主义</span>
      <span>抽象主义</span><br />
      <span>波普主义</span>
      <span>超现实主义</span><br />
      <span>极简主义</span>
      <span>巴洛克</span><br />
      <span>抽象主义</span>
      <span>幻想主义</span><br />
      <span>个人风格</span>
    </div>
    <span class="v-span-two">艺术媒介</span>
    <div class="div-span-two">
      <span>插画</span>
      <span>水墨画</span><br />
      <span>素描</span>
      <span>油画</span><br />
      <span>摄影</span>
    </div>
    <span class="v-span-three">地区</span>
    <div class="div-span-three">
      <span>美国</span>
      <span>德国</span><br />
      <span>法国</span>
      <span>俄罗斯</span><br />
      <span>英国</span>
      <span>苏格兰</span><br />
      <span>意大利</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "vAside",
};
</script>

<style>
.aside {
  width: 300px;
  height: 80%;
  /* background-color: aqua; */
}
.aside .menu {
  width: 100px;
}
.aside .line {
  float: right;
  height: 100%;
  width: 1px;
  background-color: black;
}
.v-span {
  position: absolute;
  margin-top: 30px;
  margin-left: 50px;
  font-size: medium;
  font-weight: 600;
  /* background-color: aqua; */
}
.div-span {
  position: absolute;
  margin-top: 60px;
}
.div-span span {
  display: flex;
  float: left;
  margin-left: 50px;
  padding-top: 7px;
  font-size: small;
  font-weight: 200;
}
.v-span-two {
  position: absolute;
  margin-top: 250px;
  margin-left: 50px;
  font-size: medium;
  font-weight: 600;
}
.div-span-two {
  position: absolute;
  margin-top: 280px;
}
.div-span-two span {
  width: 50px;
  display: flex;
  float: left;
  margin-left: 50px;
  padding-top: 7px;
  font-size: small;
  font-weight: 200;
}
.v-span-three {
  position: absolute;
  margin-top: 375px;
  margin-left: 50px;
  font-size: medium;
  font-weight: 600;
}
.div-span-three {
  position: absolute;
  margin-top: 410px;
}
.div-span-three span {
  width: 50px;
  display: flex;
  float: left;
  margin-left: 50px;
  padding-top: 7px;
  font-size: small;
  font-weight: 200;
}
</style>
