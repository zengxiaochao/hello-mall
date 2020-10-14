<template>
  <div>
    <h1>{{goodsId}}</h1>
  </div>
</template>

<script>
    export default {
        name: "goodsDesc",
        data() {
          return {
            goodsId:'0'
          };
        },
        created() {
          if (this.$route.query.goods==null) {
            this.$router.push('/helloHome');
          }
          this.goodsId = this.$route.query.goods.id;
        }
    }
</script>

<style scoped>

</style>
