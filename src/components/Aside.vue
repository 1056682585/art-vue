<template>
  <div class="aside">
    <div class="line"></div>
    <span class="v-span">艺术风格</span>
    <div class="div-span">
      <span @click="handleClick($event.target.textContent)">古典主义</span>
      <span @click="handleClick($event.target.textContent)">浪漫主义</span
      ><br />
      <span @click="handleClick($event.target.textContent)">印象主义</span>
      <span @click="handleClick($event.target.textContent)">表现主义</span
      ><br />
      <span @click="handleClick($event.target.textContent)">立体主义</span>
      <span @click="handleClick($event.target.textContent)">抽象主义</span
      ><br />
      <span @click="handleClick($event.target.textContent)">波普主义</span>
      <span @click="handleClick($event.target.textContent)">超现实主义</span
      ><br />
      <span @click="handleClick($event.target.textContent)">极简主义</span>
      <span @click="handleClick($event.target.textContent)">巴洛克</span><br />
      <span @click="handleClick($event.target.textContent)">抽象主义</span>
      <span @click="handleClick($event.target.textContent)">幻想主义</span
      ><br />
      <span @click="handleClick($event.target.textContent)">个人风格</span>
    </div>
    <span class="v-span-two">艺术媒介</span>
    <div class="div-span-two">
      <span @click="handleClick($event.target.textContent)">插画</span>
      <span @click="handleClick($event.target.textContent)">水墨画</span><br />
      <span @click="handleClick($event.target.textContent)">素描</span>
      <span @click="handleClick($event.target.textContent)">油画</span><br />
      <span @click="handleClick($event.target.textContent)">摄影</span>
    </div>
    <span class="v-span-three">地区</span>
    <div class="div-span-three">
      <span @click="handleClick($event.target.textContent)">美国</span>
      <span @click="handleClick($event.target.textContent)">德国</span><br />
      <span @click="handleClick($event.target.textContent)">法国</span>
      <span @click="handleClick($event.target.textContent)">俄罗斯</span><br />
      <span @click="handleClick($event.target.textContent)">英国</span>
      <span @click="handleClick($event.target.textContent)">苏格兰</span><br />
      <span @click="handleClick($event.target.textContent)">意大利</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "vAside",
  // props: ["style"],
  data() {
    return {
      style: "",
    };
  },
  methods: {
    handleClick(text) {
      console.log("你点击了" + text);
      // console.log("传过来" + this.handleValue);
      axios
        .get("http://101.37.124.37:8090/like", {
          params: {
            like: text,
          },
        })
        .then((response) => {
          this.items = response.data;
          console.log(this.items);
          this.$emit("style", this.items);
        })
        .catch((error) => {
          console.error("请求出错" + error);
        });
      console.log(this.items);
    },
  },
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
  height: 550px;
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
