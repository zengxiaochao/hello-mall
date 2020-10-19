<template>
  <div>
    <!--表头-->
    <div class="title" style="width: 80%;margin-left: 10%;">
      <h3>我的订单</h3>
      <el-table
        ref="multipleTable"
        @row-click="goOrder"
        :span-method="objectSpanMethod"
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%;">
        <el-table-column label="订单号" prop="name" align="center"></el-table-column>
        <el-table-column label="订单金额" prop="name" align="center"></el-table-column>
        <el-table-column label="订单状态" prop="name" align="center"></el-table-column>
        <el-table-column label="下单时间" prop="name" align="center"></el-table-column>
        <el-table-column label="支付时间" prop="name" align="center"></el-table-column>
        <!--        上下架状态-->
        <el-table-column label="状态"  prop="prize" width="110px" align="center">
          <template slot-scope="scope">
            <el-tag :type="orderStatus(scope.row.status)">{{scope.row.status==1?"未支付":"已支付"}}</el-tag>
          </template>
        </el-table-column>
        <!--        商品图片-->
        <el-table-column label="商品" prop="img" width="110px" align="center">
          <template slot-scope="scope">
            <el-image style="width: 100px; height: 100px;" :src="scope.row.img"/>
          </template>
        </el-table-column>
        <!--        商品名字-->
        <el-table-column label="商品名" prop="name" align="center"></el-table-column>
        <!--        商品单价-->
        <el-table-column label="单价"  prop="prize" width="110px" align="center">
          <template slot-scope="scope">
            <span>&yen;</span>{{scope.row.price}}
          </template>
        </el-table-column>
        <!--        商品数量-->
        <el-table-column label="数量"  prop="prize" width="110px" align="center">
          <template slot-scope="scope">
            <span>&yen;</span>{{scope.row.price}}
          </template>
        </el-table-column>

      </el-table>
    </div>
    <div style="width: 80%;margin-left: 10%;">

    </div>
  </div>
</template>

<script>
  export default {
    name: "myOrders",
    data()
    {
      return{
        tableData: [{
          name: '华为P40 Pro',
          price:5988.00,
          status:"1",
          img:"http://05imgmini.eastday.com/mobile/20200507/20200507135939_9e1683aae3ee6fe14f853d422cdc32be_2.jpeg",
          nums:1
        },{
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
        }, {
          name: 'iPhone 11 Pro Max',
          price:6338.90,
          status:"2",
          img:"https://img12.360buyimg.com/n1/jfs/t1/68636/31/9824/169738/5d780ed7E97e88252/7b62380330636738.jpg",
          nums:2
        }],
        search : '',
      }
    },
    created() {
    },
    methods:{
      orderStatus(status)
      {
        if(status=="1")
          return "danger";
        else if(status=="2")
          return "";
      },
      goOrder(row, column, event)
      {
        this.$router.push({
          path:'/submitOrder',
          query:{
            goods:row
          }
        });
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {

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
</style>
