<template>
  <center>
    <div style="position: absolute;right: 7%;bottom: 10%;">
      <el-tooltip class="item" effect="dark" content="返回顶层" placement="left-start">
        <el-button size="medium" @click="goTop()" icon="el-icon-arrow-up" circle></el-button>
      </el-tooltip>
      <br><br>
      <el-tooltip class="item" effect="dark" content="刷新" placement="left-start">
        <el-button size="medium" @click="goTop()" icon="el-icon-refresh-right" circle></el-button>
      </el-tooltip>
      <br><br>
      <a href="https://jq.qq.com/?_wv=1027&k=2giDHjln">
        <el-tooltip class="item" effect="dark" content="问题反馈QQ群" placement="left-start">
          <el-button size="medium"  @click="gokefu()" icon="el-icon-position" circle></el-button>
        </el-tooltip>
      </a>
    </div>
    <div class="footer" style="margin-top: 90px;margin-bottom: 0px">
        <hr />
        <p>
          <span><a href="">关于我们</a></span>
          <span><a href="">招聘启示</a></span>
<!--          <i class="el-icon-delete"></i>-->
          <span><a href="mailto:zengxiaochao666@163.com">zengxiaochao666@163.com</a></span>
          <span><a href="https://jq.qq.com/?_wv=1027&k=2giDHjln">QQ交流群：641910728<img src="../../assets/img/qqgroup.png"></a></span>
        </p>

      <p><span>公司地址：山东省烟台市XXX区XXX街道XXX号</span></p>
      <p><span>Copyright © 2020-2021</span> <span>曾小超</span></p>
        <p><span>xxx备 xxxxxxxx号-x </span><span>公网安备 xxxxxxxxxxxxxx号</span> <span>版权所有</span></p>
    </div>
  </center>
</template>
<script>
  export default {
    data() {
      return {
        collapse: false,
        fullscreen: false,
        name: 'admin',
        message: 2
      }
    },
    methods:{
      //前往页面头部
      goTop() {
        location.reload();
      },
      //前往客服
      // gokefu() {
      //   location.reload();//刷新页面
      // },
    }
  }
</script>
<style scoped>
  .footer {
    width: 100%;
    height: 160px;
  }
</style>
