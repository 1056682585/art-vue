<template>
  <div class="main">
    <div class="result">
      <span class="result-span">关于艺术家的搜索结果</span>

      <div v-if="this.items != null" class="img-one">
        <div v-for="item in items" :key="item.id" class="img-img">
          <span class="img-text">{{ item.name }}</span>
          <img :src="item.works" @click="goInfo(item.id)" />
        </div>
      </div>
      <div class="img-one">
        <div v-for="item in parentData" :key="item.id" class="img-img">
          <span class="img-text">{{ item.name }}</span>
          <img :src="item.works" @click="goInfo(item.id)" />
        </div>
      </div>
    </div>
    <v-aside @style="handleValue"></v-aside>
  </div>
</template>

<script>
import vAside from "../components/Aside.vue";
import axios from "axios";
export default {
  name: "vMain",
  components: {
    vAside,
  },
  props: ["parentData"],
  data() {
    return {
      // 引入图标用的
      // handleValue: {},
      style: "",
      area: "",
      medium: "",
      items: {},
    };
  },
  methods: {
    handleValue(item) {
      console.log("122" + item);
      console.log(this.parentData);
      this.items = item;
    },
    goInfo(id) {
      axios
        .get("http://101.37.124.37:8090/byid", {
          params: {
            id: id,
          },
        })
        .then((response) => {
          this.list = response.data[0];
          console.log(this.list);
          this.$router.push({
            name: "info",
            query: { id: this.list.id },
          });
        })
        .catch((error) => {
          console.error("请求出错" + error);
        });
      console.log("123123" + id);
    },
  },
  mounted() {
    // this.handleValue();
    // this.handleVal();
    // console.log("guolail");
    // if (this.parentData != null && this.items != null) {
    //   this.items = null;
    //   this.items = this.parentData;
    // }
    // if (this.items != null && this.parentData != null) {
    //   this.items = null;
    //   this.items = this.parentData;
    // }
  },
};
</script>

<style scoped>
.main {
  height: 560px;
  width: 100%;
  /* 主题色调 */
  background-color: rgb(233, 232, 232);
  overflow: auto;
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
  display: flex;
  flex-wrap: wrap;
  margin-top: 65px;
  margin-left: 100px;
  /* background-color: rgb(238, 33, 33); */
}
/* .img-two {
  margin-top: 50px;
  margin-left: 100px;
  width: 900px;
  height: 220px;
  background-color: rgb(241, 29, 29);
} */
.img-img {
  position: relative;
  margin-top: 50px;
  margin-left: 50px;
  width: 180px;
  height: 180px;
  /* background-color: rgb(180, 175, 180); */
  border-radius: 28px;
}
.img-img img {
  max-width: 180px;
  height: 180px;
  border-radius: 28px;
}

.img-text {
  /* display: flex;
  flex-wrap: wrap; */
  width: 180px;
  height: 20px;
  position: absolute;
  text-align: center;
  margin-top: 190px;
  font-size: small;
  font-weight: 400;
  color: rgb(48, 51, 51);
}
/* .img {
  float: left;
  margin-left: 20px;
} */
</style>
