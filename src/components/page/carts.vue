<template>
  <div>

<!--头部-->
    <div style="width: 80%;margin-left: 20%;">
      <span>
<!--        <h1>哈喽商城</h1>-->
<!--        <h1>购物车</h1>-->
      </span>
    </div>

    <!--表头-->
    <div class="title" style="width: 80%;margin-left: 10%;">
      <h3>购物车</h3>
      <el-table
        ref="multipleTable"
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        @selection-change="handleSelectionChange"
        style="width: 100%;">
<!--        多选框-->
        <el-table-column align="center"  type="selection" width="55" :selectable="canSelect"></el-table-column>
<!--        商品图片-->
        <el-table-column label="商品" prop="img" width="110px" align="center">
          <template slot-scope="scope">
            <el-image style="width: 100px; height: 100px;" :src="scope.row.img"/>
          </template>
        </el-table-column>
<!--        商品名字-->
        <el-table-column label="商品名" prop="name" align="center"></el-table-column>
<!--        上下架状态-->
        <el-table-column label="状态"  prop="prize" width="110px" align="center">
          <template slot-scope="scope">
            <el-tag :type="goodsStatus(scope.row.status)">{{scope.row.status==1?"下架":"在售"}}</el-tag>
          </template>
        </el-table-column>
<!--        商品单价-->
        <el-table-column label="单价"  prop="prize" width="110px" align="center">
          <template slot-scope="scope">
            <span>&yen;</span>{{scope.row.price}}
          </template>
        </el-table-column>
<!--        商品数量-->
        <el-table-column label="数量"  prop="num" width="140px" align="center">
          <template slot-scope="scope">
            <el-input-number size="mini" v-model="scope.row.nums" :disabled="scope.row.status==1?true:false"></el-input-number>
          </template>
        </el-table-column>
<!--        商品小计-->
        <el-table-column label="小计"  prop="allPrize" width="110px" align="center">
          <template slot-scope="scope">
            <span>&yen;</span>{{parseFloat(scope.row.price*scope.row.nums).toFixed(2)}}
          </template>
        </el-table-column>
<!--        操作-->
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button size="mini" :disabled="scope.row.status==1?true:false" type="warning" @click="handleEdit(scope.$index, scope.row)">移到收藏</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">移出购物车</el-button>
            <el-button size="mini" :disabled="scope.row.status==1?true:false" type="success" @click="selected">结算</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="width: 80%;margin-left: 10%;">

      <!--描述：商品结算开始-->
      <div class="balance">
        <ul class="balance_ul1">
          <el-button type="danger" size="medium" class="button1" plain>删除选中商品</el-button>
          <el-button type="danger" size="medium" class="button1" plain>清除下架商品</el-button>
          <el-button type="warning" size="medium" class="button1" plain>移到我的收藏</el-button>
          <el-button type="success" size="medium" class="button1" plain>结算选中商品</el-button>
          <span class="balance_ul2">
              <span>共<span class="spanText">{{changeNumPri(1)}}</span>件商品</span>
              <span>总价<span class="spanText">&yen;{{changeNumPri(2)}}</span></span>
              <span>
                <router-link to="/makeSureOrder">
                  <el-button>全部结算</el-button>
                </router-link>
              </span>
          </span>
        </ul>
      </div>
      <!--描述：商品结算结束-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "carts",
        data()
        {
          return{
            tableData: [{
              name: '华为P40 Pro',
              price:5988.00,
              status:"1",
              img:"http://05imgmini.eastday.com/mobile/20200507/20200507135939_9e1683aae3ee6fe14f853d422cdc32be_2.jpeg",
              nums:1
            }, {
              name: 'iPhone 11 Pro Max',
              price:6338.90,
              status:"2",
              img:"https://img12.360buyimg.com/n1/jfs/t1/68636/31/9824/169738/5d780ed7E97e88252/7b62380330636738.jpg",
              nums:2
            }],
            search : '',
            //选中列表
            multipleSelection : [],
            chooseList : [],
          }
        },
        created() {

        },
        methods:{
          canSelect(row) {
            if(row.status==1)
              return false;
            else return true;
          },
          goodsStatus(status)
          {
              if(status=="1")
                return "danger";
              else if(status=="2")
                return "";
          },
          changeNumPri(which)
          {
            const length = this.tableData.length;
            //总价
            //全部数量
            let allPricess = 0.0;
            let allNumss = 0;
            for (let i = 0; i < length; i++) {
                if(this.tableData[i].status!=1)
                {
                  allPricess += this.tableData[i].nums*this.tableData[i].price;
                  allNumss += this.tableData[i].nums;
                }
            }
            if(which=='2'){
              return parseFloat(allPricess).toFixed(2);
            }else{
              return allNumss;
            }
          },
          // 多选操作
          handleSelectionChange(val) {
            this.multipleSelection = val;
          },
      }
    }
</script>

<style scoped>
  .title{
    margin-top: 50px;
  }
  .title h3{
    /*float: left;*/
    font-size: 23px;
    color: #c91623;
  }

  /*商品结算*/
  .balance{
    height: 50px;
    border: 1px solid gray;
    margin-top: 40px;
  }
  .balance li{
    float: left;
    line-height: 5px;
    margin-left: 22px;
  }
  .balance_ul2{
    float: right;
    margin-right: 10px;
  }
  .balance_ul1 .button1{
    margin-top: 5px;
  }
  .balance_ul2 .spanText{
    font-size: 25px;
    color: #C91623 ;
    font-weight: bold;
  }
  .balance_ul2 button{
    width: 100px;
    height: 50px;
    background-color: brown;
    border: 1px solid #c91623;
    font-weight: bold;
    font-size: 20px;
    color: white;
  }
  .balance_ul2 button:hover{
    background-color:#C91623 ;
  }
</style>
