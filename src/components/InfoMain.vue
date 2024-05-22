<template>
  <div class="main">
    <div class="info">
      <div class="img"></div>
      <div class="text">
        <span class="span-one">Abbott Handerson Thayer</span><br />
        <div class="text-two">
          <span class="span-two">艺术风格：</span><br />
          <span class="span-two">艺术媒介：</span><br />
          <span class="span-two">地区：</span>
        </div>
      </div>
    </div>
    <div class="index">
      <span>主要作品</span>
      <div class="index-text"></div>
      <div class="index-img"></div>
    </div>
    <div class="index-two">
      <span>风格表现</span>
      <div class="index-block">
        <div class="index-img"></div>
        <span class="index-text">提示词：1231231231</span>
      </div>
      <div class="index-block">
        <div class="index-img"></div>
        <span class="index-text">提示词：1231231231</span>
      </div>
      <div class="index-block">
        <div class="index-img"></div>
        <span class="index-text">提示词：1231231231</span>
      </div>
      <div class="index-block">
        <div class="index-img"></div>
        <span class="index-text">提示词：1231231231</span>
      </div>
      <div class="index-block">
        <div class="index-img"></div>
        <span class="index-text">提示词：1231231231</span>
      </div>
      <div class="index-block">
        <div class="index-img"></div>
        <span class="index-text">提示词：1231231231</span>
      </div>
    </div>
  </div>
</template>

<script>
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
  position: relative;
  display: flex;
  height: 570px;
  width: 100%;
  justify-content: center;
  /* 主题色调 */
  background-color: rgb(233, 232, 232);
  overflow: auto;
}
.info {
  margin-top: 40px;
  width: 800px;
  height: 200px;
  /* background-color: aqua; */
}
.info .img {
  float: left;
  width: 150px;
  height: 150px;
  border-radius: 45px;
  background-color: blanchedalmond;
}
.info .text {
  float: left;
}
.info .text .span-one {
  position: absolute;
  margin-top: 20px;
  margin-left: 80px;
  font-size: large;
  font-weight: 900;
}
.text-two {
  width: 200px;
  height: 120px;
  /* background-color: aquamarine; */
  margin-top: 30px;
}
.span-two {
  display: block;
  width: 150px;
  height: 10px;
  margin-left: 80px;
  font-size: x-small;
  font-weight: 400;
  /* background-color: bisque; */
}
.index {
  position: absolute;
  width: 800px;
  height: 200px;
  /* background-color: aqua; */
  margin-top: 210px;
}
.index-img {
  width: 150px;
  margin-top: 10px;
  height: 170px;
  background-color: black;
}
.index .index-text {
  float: right;
  margin-right: 170px;
  margin-top: 33px;
  width: 400px;
  height: 160px;
  background-color: antiquewhite;
}
.index-two {
  position: absolute;
  width: 800px;
  /* background-color: aqua; */
  margin-top: 450px;
}
.index-two span {
  position: absolute;
}
.index-two .index-img {
  width: 250px;
  margin-top: 20px;
  height: 250px;
  background-color: black;
}
.index-two .index-text {
  width: 180px;
  height: 40px;
  margin-top: 13px;
  font-size: x-small;
  font-weight: 400;
  color: rgb(48, 51, 51);
}
.index-block {
  position: relative;
  height: 250px;
  margin-top: 100px;
  float: left;
  margin-right: 100px;
}
</style>
