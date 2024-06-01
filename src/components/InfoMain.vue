<template>
  <div class="main">
    <div class="info">
      <div class="img">
        <img :src="header" />
      </div>
      <div class="text">
        <span class="span-one">{{ name }}</span
        ><br />
        <div class="text-two">
          <span class="span-two">艺术风格：{{ style }}</span
          ><br />
          <span class="span-two">艺术媒介：{{ medium }}</span
          ><br />
          <span class="span-two">地区：{{ area }}</span>
        </div>
      </div>
    </div>
    <div class="index">
      <span>主要作品</span>
      <div class="index-text">{{ remark }}</div>
      <div class="index-img">
        <img :src="works" />
      </div>
    </div>
    <div class="index-two">
      <span>风格表现</span>
      <div class="index-block">
        <div class="index-img">
          <img :src="stylize0" />
        </div>
        <span class="index-text"
          >提示词：{{ name }}<br />
          <text>stylize:0</text></span
        >
      </div>
      <div class="index-block">
        <div class="index-img">
          <img :src="stylize50" />
        </div>
        <span class="index-text"
          >提示词：{{ name }}<br />
          <text>stylize:50</text></span
        >
      </div>
      <div class="index-block">
        <div class="index-img">
          <img :src="stylize100" />
        </div>
        <span class="index-text"
          >提示词：{{ name }}<br />
          <text>stylize:100</text></span
        >
      </div>
      <div class="index-block">
        <div class="index-img">
          <img :src="stylize250" />
        </div>
        <span class="index-text"
          >提示词：{{ name }}<br />
          <text>stylize:250</text></span
        >
      </div>
      <div class="index-block">
        <div class="index-img">
          <img :src="stylize750" />
        </div>
        <span class="index-text"
          >提示词：{{ name }}<br />
          <text>stylize:750</text>
        </span>
      </div>
      <div class="index-block">
        <div class="index-img">
          <img :src="stylize1000" />
        </div>
        <span class="index-text"
          >提示词：{{ name }}<br />
          <text>stylize:1000</text></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "vMain",
  data() {
    return {
      list: {},
      id: "",
      url: "",
      header: "",
      name: "",
      style: "",
      medium: "",
      area: "",
      remark: "",
      works: "",
      stylize0: "",
      stylize50: "",
      stylize100: "",
      stylize250: "",
      stylize750: "",
      stylize1000: "",
    };
  },
  // beforeCreated() {
  //   this.loadEvent();
  // },
  created() {
    this.url = this.$route.query.url;
    this.id = this.$route.query.id;
    console.log(this.$route.query.url);
    this.loadEvent();
  },
  methods: {
    loadEvent() {
      axios
        .get("http://101.37.124.37:8090/works", {
          params: {
            str: this.url,
            id: this.id,
          },
        })
        .then((response) => {
          this.header = response.data.header;
          this.name = response.data.name;
          this.style = response.data.style;
          this.medium = response.data.medium;
          this.area = response.data.area;
          this.remark = response.data.remark;
          this.works = response.data.works;
          this.stylize0 = response.data.stylize0;
          this.stylize50 = response.data.stylize50;
          this.stylize100 = response.data.stylize100;
          this.stylize250 = response.data.stylize250;
          this.stylize750 = response.data.stylize750;
          this.stylize1000 = response.data.stylize1000;
          console.log(response.data.header);
        })
        .catch((error) => {
          console.error("请求出错" + error);
        });
    },
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
  position: relative;
  float: left;
  width: 150px;
  height: 150px;
  border-radius: 45px;
  /* background-color: blanchedalmond; */
}
.info .img img {
  width: 150px;
  height: 150px;
  border-radius: 45px;
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
  position: relative;
  width: 150px;
  margin-top: 10px;
  height: 170px;
  /* background-color: black; */
}
.index-img img {
  max-width: 100%;
  height: auto;
}
.index .index-text {
  float: right;
  margin-right: 170px;
  margin-top: 33px;
  width: 400px;
  height: 160px;
  /* background-color: antiquewhite; */
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
.index-block img {
  max-width: 100%;
  height: auto;
}
</style>
