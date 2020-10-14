<template>
  <div>
    <div class="demo-image__preview">
      <el-image
        style="width: 100px; height: 100px"
        :src="imgUrl"
        :preview-src-list="srcList">
      </el-image>
    </div>
  </div>
</template>

<script>
    export default {
        name: "goodsDesc",
        data() {
          return {
            goodsId:'0',
            imgUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            srcList: [
              'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
              'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
            ]
          };
        },
        created() {
          if (this.$route.query.goods==null) {
            this.$router.push('/helloHome');
          }
          this.goodsId = this.$route.query.goods.id;
          this.imgUrl = this.$route.query.goods.img;
        }
    }
</script>

<style scoped>

</style>
