<template>
  <div class="main">
    <div class="e-input">
      <el-input
        class="input"
        prefix-icon="Search"
        size="large"
        @click="gotoIndex"
      />
    </div>
    <div class="img-box">
      <div class="one">
        <div class="squ">
          <img :src="list[0]" @click="ImgClick1()" />
          <!-- <img src="http://101.37.124.37:8087/pic/Agnes%20Martin/00.jpg" /> -->
        </div>
        <div class="len">
          <img :src="list[1]" @click="ImgClick2()" />
        </div>
      </div>
      <div class="one">
        <div class="len-two">
          <img :src="list[2]" @click="ImgClick3()" />
        </div>
        <div class="squ-two">
          <img :src="list[3]" @click="ImgClick4()" />
        </div>
      </div>
      <div class="one">
        <div class="squ">
          <img :src="list[4]" @click="ImgClick5()" />
        </div>
        <div class="len">
          <img :src="list[5]" @click="ImgClick6()" />
        </div>
      </div>
      <div class="one">
        <div class="len-two">
          <img :src="list[6]" @click="ImgClick7()" />
        </div>
        <div class="squ-two">
          <img :src="list[7]" @click="ImgClick8()" />
        </div>
      </div>
      <div class="one">
        <div class="squ">
          <img :src="list[8]" @click="ImgClick9()" />
        </div>
        <div class="len">
          <img :src="list[9]" @click="ImgClick10()" />
        </div>
      </div>
      <div class="one">
        <div class="len-two">
          <img :src="list[10]" @click="ImgClick11()" />
        </div>
        <div class="squ-two">
          <img :src="list[11]" @click="ImgClick12()" />
        </div>
      </div>
      <div class="one">
        <div class="squ">
          <img :src="list[12]" @click="ImgClick13()" />
        </div>
        <div class="len">
          <!-- <img
            :src="'data:image/png;base64' + list[13]"
            @click="ImgClick14()"
          /> -->
          <img :src="list[13]" @click="ImgClick14()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Search } from "@element-plus/icons-vue";
import axios from "axios";
export default {
  name: "vMain",
  data() {
    return {
      list: {},
      // 引入图标用的
    };
  },
  beforeMount() {
    this.loadEvent();
  },
  methods: {
    loadEvent() {
      axios
        .get("http://101.37.124.37:8090/part")
        .then((response) => {
          this.list = response.data;
          console.log(this.list[0]);
        })
        .catch((error) => {
          console.error("请求出错" + error);
        });
    },
    gotoIndex() {
      this.$router.push({
        name: "index",
      });
    },
    ImgClick1() {
      let str = "101.37.124.37:8087/pic/Agnes Martin/00.jpg";
      console.log(str);
      this.$router.push({
        name: "info",
        query: { url: str },
      });
    },
    ImgClick2() {
      let str = "101.37.124.37:8087/pic/Ai Weiwei/00.jpg";
      console.log(str);
      this.$router.push({
        name: "info",
        query: { url: str },
      });
    },
    ImgClick3() {
      let str = "101.37.124.37:8087/pic/Albrecht Dürer/00.jpg";
      console.log(str);
      this.$router.push({
        name: "info",
        query: { url: str },
      });
    },
    ImgClick4() {
      let str = "101.37.124.37:8087/pic/Alfred Kubin/00.png";
      console.log(str);
      this.$router.push({
        name: "info",
        query: { url: str },
      });
    },
    ImgClick5() {
      let str = "101.37.124.37:8087/pic/Alfred Sisley/00.jpg";
      console.log(str);
      this.$router.push({
        name: "info",
        query: { url: str },
      });
    },
    ImgClick6() {
      let str = "101.37.124.37:8087/pic/Alfred Stieglitz/00.jpg";
      console.log(str);
      this.$router.push({
        name: "info",
        query: { url: str },
      });
    },
    ImgClick7() {
      let str = "101.37.124.37:8087/pic/Alphonse Mucha/00.jpg";
      console.log(str);
      this.$router.push({
        name: "info",
        query: { url: str },
      });
    },
    ImgClick8() {
      let str = "101.37.124.37:8087/pic/André Derain/00.jpg";
      console.log(str);
      this.$router.push({
        name: "info",
        query: { url: str },
      });
    },
    ImgClick9() {
      let str = "101.37.124.37:8087/pic/Andrew Wyeth/00.jpg";
      console.log(str);
      this.$router.push({
        name: "info",
        query: { url: str },
      });
    },
    ImgClick10() {
      let str = "101.37.124.37:8087/pic/Andy Warhol/00.jpg";
      console.log(str);
      this.$router.push({
        name: "info",
        query: { url: str },
      });
    },
    ImgClick11() {
      let str = "101.37.124.37:8087/pic/Anni Albers/00.jpg";
      console.log(str);
      this.$router.push({
        name: "info",
        query: { url: str },
      });
    },
    ImgClick12() {
      let str = "101.37.124.37:8087/pic/Annie Leibovitz/00.jpg";
      console.log(str);
      this.$router.push({
        name: "info",
        query: { url: str },
      });
    },
    ImgClick13() {
      let str = "101.37.124.37:8087/pic/Ansel Adams/00.jpg";
      console.log(str);
      this.$router.push({
        name: "info",
        query: { url: str },
      });
    },
    ImgClick14() {
      let str = "101.37.124.37:8087/pic/Anthony van Dyck/00.jpg";
      this.$router.push({
        name: "info",
        query: { url: str },
      });
    },
  },
};
</script>

<style scoped>
.main {
  height: 570px;
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
  position: relative;
  width: 140px;
  height: 140px;
  background-color: rgb(204, 209, 209);
  border-radius: 25px;
}
.squ img {
  max-width: 100%;
  height: 140px;
  border-radius: 25px;
}
.len {
  position: relative;
  margin-top: 10px;
  width: 140px;
  height: 250px;
  background-color: rgb(204, 209, 209);
  border-radius: 25px;
}
.len img {
  max-width: 100%;
  height: 250px;
  border-radius: 25px;
}
.squ-two {
  position: relative;
  margin-top: 10px;
  width: 140px;
  height: 140px;
  background-color: rgb(204, 209, 209);
  border-radius: 25px;
}
.squ-two img {
  max-width: 100%;
  height: 140px;
  border-radius: 25px;
}
.len-two {
  position: relative;
  width: 140px;
  height: 250px;
  background-color: rgb(204, 209, 209);
  border-radius: 25px;
}
.len-two img {
  max-width: 100%;
  height: 250px;
  border-radius: 25px;
}
.squ:hover img {
  transform: scale(1.1);
}
.len:hover img {
  transform: scale(1.1);
}
.squ-two:hover img {
  transform: scale(1.1);
}
.len-two:hover img {
  transform: scale(1.2);
}
</style>
