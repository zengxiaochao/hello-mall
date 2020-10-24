<template >
  <div style="">
    <div class="goodsBox">
      <div class="goodsBox-img">
        <el-image
          style="position: absolute;width: 500px; height: 600px;left: 0px;border-radius: 14px;"
          :src="imgUrl"
          :preview-src-list="srcList">
        </el-image>
        <div class="goodsBox-store">
          <p>华为旗舰店</p>
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </div>
        <div class="goodsBox-btn">
         <br><br>
          <h1>华为 HUAWEI Mate 40 Pro</h1><br>
          <p>每一个感动，每一份精彩都不应被遗忘。华为Mate 40 系列，赋予画幅新生，定义探索深远，用超感知影像的力量，让记忆历久弥新，让温暖与美好清晰留存。</p><br><br><br><br><br>
          <h2><span style="color: #777777">售价&ensp;</span><span style="color: #e4393c;font-family: simsun">&yen;<span></span>{{money}}</span></h2>
          <br><br>
          <h4 style="position: relative;left: -35%;"><span style="color: #777777">库存&ensp;</span><span style="color: #4D6530;font-family: simsun"><span></span>{{sum}}</span></h4>
          <el-input-number size="large" v-model="num" :min="1" :max="sum" @change="handleChange" label="商品数量"></el-input-number>
          <el-button size="medium" type="danger" @click="add1">加入购物车</el-button>
          <el-button size="medium" type="warning" @click="add2">收藏</el-button>
          <p style="color: #777777">温馨提示·支持X天无理由退货</p>
        </div>
      </div>
    </div>
<!--    猜你喜欢-->
    <div class="goodsLikes" id="goodsLikes" style="text-align: center;">
      <hr />
      <h1 style="color: #777777">猜你喜欢</h1>
      <div style="margin-left: 23%">
        <div class="card" v-for="(item, index) in goodsLikesList" :key="item.id" v-on:mouseenter="showDialog(index)" v-on:mouseleave="hideDialog(index)">
          <div class="ribbon">
            <!--鼠标移入移出事件-->
            <div class="handleDialog" v-if="ishow && index==current">
              <p style="margin-left:5%;margin-top: 60%;">华为P30</p>
              <el-button type="success" style="margin-left:5%;" size="medium" @click="goGoodsDesc(item.id)">查看详情</el-button>
            </div>
            <img :src="item.img" style="height: 100%;width: 100%">
            <h2><span style="color: #e4393c;font-family: simsun">&yen;{{money}}</span></h2>
          </div>
        </div>
      </div>
<!--      <div style="float: left;width: 23%;height: 1px;"></div>-->
      <br><br>
    </div>
<!--    详情图片-->
    <div class="goodsDescImg" id="goodsDescImg" style="text-align: center;margin-top: 300px">
      <hr />
      <h1 style="color: #777777">商品详情</h1><br><br><br>
      <el-image v-for="url in srcList" :key="url" :src="url"></el-image>
    </div>
  </div>


</template>

<script>
    export default {
        name: "goodsDesc",
        data() {
          return {
            num: 1,
            value: 3.7,
            money:5999.00,
            prize:5999.00,
            sum:65,
            goodsId:'0',
            //隐形窗口
            ishow: false,
            current: 0,

            //按钮点击限制
            add1_can_press : true,
            add2_can_press : true,
            err_can_press : true,

            //商品详情
            imgUrl: 'https://img13.360buyimg.com/n1/jfs/t1/127138/40/16031/89209/5f918b53E19746496/f0f235be5150056f.jpg',
            srcList: [
              'http://img20.360buyimg.com/vc/jfs/t1/105367/36/17413/3696469/5e85c8d5E2e1acf66/0d3545ec70f2646f.jpg',
            ],goodsLikesList:[
              {id:1,name:"Iphone XS Max", img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1296012258,3994659249&fm=26&gp=0.jpg",prize:"10.00",desc:"苹果官方旗舰店"},
              {id:2,name:"Iphone XS Max", img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=373013405,916647179&fm=11&gp=0.jpg",prize:"10.00",desc:"苹果官方旗舰店"},
              {id:3,name:"Iphone XS Max", img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460157289,154459426&fm=26&gp=0.jpg",prize:"10.00",desc:"苹果官方旗舰店"},
              {id:4,name:"Iphone XS Max", img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460157289,154459426&fm=26&gp=0.jpg",prize:"10.00",desc:"苹果官方旗舰店"},
              {id:5,name:"Iphone XS Max", img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460157289,154459426&fm=26&gp=0.jpg",prize:"10.00",desc:"苹果官方旗舰店"},
            ]
          };
        },
        created() {
          if (this.$route.query.goods==null) {
            this.$router.push('/helloHome');
          }
          this.goodsId = this.$route.query.goods;
          this.getdate();
        }
        ,
        methods: {
          //数据更新
          getdate() {


          },
          //前往商品详情页
          goGoodsDesc(goods) {
            this.$router.push({
              path:'/goodsDesc',
              query:{
                goods:goods
              }
            });
          },
          handleChange(value) {
            this.money = value * this.prize;
            console.log(value);
          },
          //显示操作项
          showDialog(index, item) {
            this.ishow = true;
            this.current = index;
          },
          //隐藏蒙层
          hideDialog(index, item) {
            this.ishow = false;
            this.current = null;
          },
          //添加购物车
          add1() {
            if(this.add1_can_press==true)
            {
              this.$notify({
                title: '添加购物车',
                message: '商品已添加到你的购物车',
                type: 'success'
              });
              this.add1_can_press = false;
              setTimeout(()=>{
                this.add1_can_press = true;
              },2000)
            }else if(this.err_can_press==true){
              this.$notify.error({
                title: '错误',
                message: '请求过于频繁，2秒后重试'
              });
              this.err_can_press = false;
              setTimeout(()=>{
                this.err_can_press = true;
              },1000)
            }
          },
          //添加收藏
          add2() {
            if(this.add2_can_press==true)
            {
              this.$notify({
                title: '收藏',
                message: '收藏成功',
                type: 'success'
              });
              this.add2_can_press = false;
              setTimeout(()=>{
                this.add2_can_press = true;
              },2000)
            }else if(this.err_can_press==true){
              this.$notify.error({
                title: '错误',
                message: '请求过于频繁，2秒后重试'
              });
              this.err_can_press = false;
              setTimeout(()=>{
                this.err_can_press = true;
              },1000)
            }

          },
        }

    }
</script>

<style scoped>
  .goodsBox {
    /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
    /*background: #F2F8FE;*/
    position: relative;
    width:1400px;
    height: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .goodsBox-img {
    position: absolute;
    top: 5%;
    left: 15%;
    width: 75%;
    height: 75%;
    /*background-color: #409EFF;*/
     /*text-align: center; */
    /* vertical-align: middle; */
  }
  .goodsBox-btn {
    position: absolute;
    top: 15%;
    left: 55%;
    width: 40%;
    height: 20%;
    /*background-color: #409E1F;*/
     text-align: center;
     vertical-align: middle;
  }
  .goodsBox-store {
    position: absolute;
    top: 5%;
    left: 45%;
    width: 30%;
    height: 20%;
    /*background-color: #409E1F;*/
     text-align: center;
     vertical-align: middle;
  }

  /**
  卡片
   */

  .card{
    height: 170px;
    width: 170px;
    margin-left: 30px;
    margin-top: 30px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
    float: left;
  }
  .card img {
    width: 100%;
    height: 100%;
  }
  .card span {
    font-size: 15px;
    color: #BFBFBF;
    display: block;
    letter-spacing: 2px;
    /*padding: 0px 20px;*/
  }
  /**
隐藏页
*/
  .handleDialog {
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
  }
  /**
丝带
 */

  .ribbon {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
    float: left;
    margin-bottom: 30px;
    background-size: cover;
    text-transform: uppercase;
    color: white;
  }
</style>
