<template>
  <div class="part-one">
    <img class="part-one-image" :src="headImage" />
    <p>姓&emsp;&emsp;名：朱晓东</p>
    <p>学&emsp;&emsp;历：本科</p>
    <p>工作年限：1 年</p>
    <p>年&emsp;&emsp;龄：24</p>
    <p>联系电话：15732625996</p>
    <p>电子邮箱：zxd6654@163.com</p>
    <p>
      掘&emsp;&emsp;金：
      <a href="https://juejin.im/user/5bcecc76e51d457ab96a36d5/posts">麦兜儿</a>
    </p>
    <p>
      GitHub：
      <a href="https://github.com/zxd6654/resume">ZhuXiaodong</a>
    </p>
    <p>
      生成PDF：
      <el-button type="text" @click="downLoadPdf">下载</el-button>
    </p>
  </div>
</template>

<script>
export default {
  name: "partOne",
  data() {
    return {
      headImage: require("../assets/img/head_image.jpg")
    };
  },

  methods: {
    downLoadPdf() {
      this.$root.$children[0].toGetPdf();
    }
  }
};
</script>

<style scoped>
a {
  color: deepskyblue;
}
a:hover {
  color: rgb(118, 190, 248);
}
p {
  line-height: 30px;
}
.part-one {
  width: 100%;
  height: 500px;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
  padding-left: 10px;
}
.part-one-image {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}
</style>