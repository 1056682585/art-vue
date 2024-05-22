<template>
  <div class="main">
    <div class="result">
      <span class="result-span">关于Abbott Handerson Thayer的搜索结果</span>
      <div class="img-one">
        <div class="img">
          <div class="img-img"></div>
          <span class="img-text">Abbott Handerson Thayer</span>
        </div>
        <div class="img">
          <div class="img-img"></div>
          <span class="img-text">Abbott Handerson Thayer</span>
        </div>
        <div class="img">
          <div class="img-img"></div>
          <span class="img-text">Abbott Handerson Thayer</span>
        </div>
        <div class="img">
          <div class="img-img"></div>
          <span class="img-text">Abbott Handerson Thayer</span>
        </div>
      </div>
      <div class="img-two">
        <div class="img">
          <div class="img-img"></div>
          <span class="img-text">Abbott Handerson Thayer</span>
        </div>
        <div class="img">
          <div class="img-img"></div>
          <span class="img-text">Abbott Handerson Thayer</span>
        </div>
        <div class="img">
          <div class="img-img"></div>
          <span class="img-text">Abbott Handerson Thayer</span>
        </div>
        <div class="img">
          <div class="img-img"></div>
          <span class="img-text">Abbott Handerson Thayer</span>
        </div>
      </div>
    </div>
    <v-aside></v-aside>
  </div>
</template>

<script>
import vAside from "../components/Aside.vue";
export default {
  name: "vMain",
  components: {
    vAside,
  },
  data() {
    return {
      // 引入图标用的
    };
  },
};
</script>

<style scoped>
.main {
  height: 695px;
  width: 100%;
  /* 主题色调 */
  background-color: rgb(233, 232, 232);
}
.main .result {
  float: right;
  width: 80%;
  height: 80%;
  /* background-color: aqua; */
}
.result-span {
  position: absolute;
  width: 400px;
  height: 25px;
  /* background-color: blue; */
  margin-top: 25px;
  margin-left: 130px;
  font-size: small;
  font-weight: 400;
}
.img-one {
  margin-top: 65px;
  margin-left: 100px;
  width: 900px;
  height: 220px;
  /* background-color: rgb(238, 33, 33); */
}
.img-two {
  margin-top: 50px;
  margin-left: 100px;
  width: 900px;
  height: 220px;
  /* background-color: rgb(241, 29, 29); */
}
.img-img {
  width: 180px;
  height: 180px;
  background-color: rgb(180, 175, 180);
  border-radius: 28px;
}
.img-text {
  width: 180px;
  position: absolute;
  text-align: center;
  margin-top: 13px;
  font-size: small;
  font-weight: 400;
  color: rgb(48, 51, 51);
}
.img {
  float: left;
  margin-left: 20px;
}
</style>
