<template>
  <div class="footer">
    <div class="foot-on">
      <text>MSi</text>
      <div class="line"></div>
    </div>
    <div class="foot-down">
      <text>关于我们</text>
      <text>用户协议</text><br />
      <text>隐私政策</text>
      <text>常见问题</text><br />
    </div>
    <div class="foot-end">
      <text class="join">加入我们</text>
      <div class="image">
        <img src="../image/微博.png" />
        <img src="../image/微信.png" />
        <img src="../image/信息.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vFooter",
};
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 80%;
  margin-left: 10%;
  height: 140px;
}
.footer .foot-on text {
  display: flex;
  height: 55%;
  width: 200px;
  /* justify-content: center; */
  font-size: 30px;
  font-weight: 900;
  font-family: "Arial";

  /* background-color: blue; */
}
.footer .foot-on .line {
  margin-top: 5px;
  width: 100%;
  border-bottom: 0.5px solid black;
}
.foot-end .image {
  display: flex;
  float: right;
  height: 30px;
  align-items: center;
  width: 94.5%;
}
.foot-down {
  margin-top: 6px;
}
.foot-down text {
  font-family: "Arial";
  font-size: 10px;
  font-weight: 550;
  letter-spacing: 1px;
  margin-right: 20px;
}
.foot-end text {
  font-family: "Arial";
  font-size: 10px;
  font-weight: 550;
  letter-spacing: 1px;
  margin-right: 10px;
}
/* .foot-down .join {
  float: left;
} */
/* .foot-down .image text {
  position: absolute;
} */
img {
  margin-bottom: 0;
  margin-right: 8px;
  height: 15px;
  width: 15px;
}
</style>
