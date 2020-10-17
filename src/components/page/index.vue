<template>
  <div>


    <el-carousel :interval="4000" type="card" height="200px" style="background: #F2F8FE">
      <el-carousel-item v-for="item in imageList" :key="item.address">
        <img :src="item.address">
      </el-carousel-item>
    </el-carousel>
    <br>
    <el-container>
      <div style="float: left;width: 25%;">
        <!--左边栏空白占位  -->
      </div>
<!--      <el-cascader-panel :options="options" style="width: 19%;background: #F2F8FE;"></el-cascader-panel>-->
      <div style="float: left;width: 50%;">
        <el-input placeholder="查询商品" v-model="selectd" class="input-with-select" size="1000px">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <p style="color: #BFBFBF;">
          <span>热门搜索：</span>
          <a href="">华为P40</a>
          <a href="">海尔空调</a>
          <a href="">海尔空调</a>
          <a href="">海尔空调</a>
          <a href="">海尔空调</a>
          <a href="">惠普打印机</a>
        </p>

      </div>
    </el-container>

    <br>
    <div>
      <el-container >
        <div style="float: left;width: 10%;background-color: #DCDFE6;">
          <!--左边栏空白占位  -->
        </div>
        <div style="float: left;width: 80%;">
              <div class="card"  v-for="(item, index) in goodsList" :key="item.id" v-on:mouseenter="showDialog(index)" v-on:mouseleave="hideDialog(index)">
                  <div class="ribbon">
                    <!--鼠标移入移出事件-->
                    <div class="handleDialog" v-if="ishow && index==current">
                      <el-button type="success" style="margin-left:25%;margin-top: 70%;" size="medium" @click="goGoodsDesc(item.id)">查看详情</el-button>
                      <el-button type="warning" icon="el-icon-star-off" circle size="medium"></el-button>
                    </div>
                    <img :src="item.img" style="height: 100%;width: 100%">
                    <div class="wrap"><span class="ribbon6" style="color:#000;"><span style="color: #F2F8FE">{{item.id}}</span></span>
                  </div>
                </div>
                <div style="text-align:center">
                  <span>{{item.name}}</span>
                  <span>&yen;{{item.prize}}</span>
                  <span>{{item.desc}}</span>
                </div>
              </div>
        </div>
        <div style="float: left;width: 10%;background-color: #DCDFE6;">
          <!--右边栏空白占位  -->
        </div>

      </el-container>
      <br>
      <center>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </center>
    </div>
  </div>
</template>

<script>
  export default {
      name: "index",
      data() {
        return {
          ishow: false,
          current: 0,
          selectd: '',
          currentDate: new Date(),
          imageList:[
            {id:1,title:"test1", address:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2013319254,3446577563&fm=26&gp=0.jpg"},
            {id:2,title:"test2", address:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2013319254,3446577563&fm=26&gp=0.jpg"},
            {id:3,title:"test3", address:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2013319254,3446577563&fm=26&gp=0.jpg"},
            {id:4,title:"test4", address:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2013319254,3446577563&fm=26&gp=0.jpg"},
            {id:5,title:"test5", address:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2013319254,3446577563&fm=26&gp=0.jpg"},
            {id:6,title:"test6", address:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2013319254,3446577563&fm=26&gp=0.jpg"},
          ],
          goodsList:[
            {id:1,name:"Iphone XS Max", img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1296012258,3994659249&fm=26&gp=0.jpg",prize:"10.00",desc:"苹果官方旗舰店"},
            {id:2,name:"Iphone XS Max", img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=373013405,916647179&fm=11&gp=0.jpg",prize:"10.00",desc:"苹果官方旗舰店"},
            {id:3,name:"Iphone XS Max", img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460157289,154459426&fm=26&gp=0.jpg",prize:"10.00",desc:"苹果官方旗舰店"},
            {id:4,name:"Iphone XS Max", img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460157289,154459426&fm=26&gp=0.jpg",prize:"10.00",desc:"苹果官方旗舰店"},
            {id:5,name:"Iphone XS Max", img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460157289,154459426&fm=26&gp=0.jpg",prize:"10.00",desc:"苹果官方旗舰店"},
            {id:6,name:"Iphone XS Max", img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460157289,154459426&fm=26&gp=0.jpg",prize:"10.00",desc:"苹果官方旗舰店"},
            {id:7,name:"Iphone XS Max", img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460157289,154459426&fm=26&gp=0.jpg",prize:"10.00",desc:"苹果官方旗舰店"},

          ],options: [{
            value: 'zhinan',
            label: '指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则'
            }, {
              value: 'daohang',
              label: '导航'
            }]
          }, {
            value: 'zujian',
            label: '组件',
            children: [{
              value: 'basic',
              label: 'Basic'
            }, {
              value: 'form',
              label: 'Form'
            }, {
              value: 'data',
              label: 'Data'
            }, {
              value: 'notice',
              label: 'Notice'
            }, {
              value: 'navigation',
              label: 'Navigation'
            }, {
              value: 'others',
              label: 'Others'
            }]
          }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }]
          }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }]
          }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }]
          }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }]
          }]
        };
      },
      methods:{
        //前往商品详情页
        goGoodsDesc(goods) {
          this.$router.push({
            path:'/goodsDesc',
            query:{
              goods:goods
            }
          });
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
        }
      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
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
  卡片
   */

  .card{
    height: 350px;
    width: 266px;
    margin-left: 30px;
    margin-top: 30px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
    float: left;
  }
  .card img {
    width: 100%;
    height: 70%;
  }
  .card span {
    font-size: 15px;
    color: #BFBFBF;
    display: block;
    letter-spacing: 2px;
    /*padding: 0px 20px;*/
  }
/**
丝带
 */

  .ribbon {
    display: inline-block;
    width: 100%;
    height: 70%;
    position: relative;
    float: left;
    margin-bottom: 30px;
    background-size: cover;
    text-transform: uppercase;
    color: white;
  }

  .wrap {
    width: 100%;
    height: 188px;
    position: absolute;
    top: -8px;
    left: 8px;
    overflow: hidden;
  }
  .wrap:before {
    content: "";
    display: block;
    border-radius: 8px 8px 0px 0px;
    width: 40px;
    height: 8px;
    position: absolute;
    right: 100px;
    background: #4D6530;
  }
  .wrap:after {
    content: "";
    display: block;
    border-radius: 0px 8px 8px 0px;
    width: 8px;
    height: 40px;
    position: absolute;
    right: 0px;
    top: 100px;
    background: #4D6530;
  }
  .ribbon6 {
    display: inline-block;
    text-align: center;
    width: 200px;
    height: 40px;

    line-height: 40px;
    position: absolute;
    top: 30px;
    right: -50px;
    z-index: 2;
    overflow: hidden;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    border: 1px dashed;
    box-shadow: 0 0 0 3px #57DD43, 0px 21px 5px -18px rgba(0, 0, 0, 0.6);
    background: #57DD43;
  }
</style>
