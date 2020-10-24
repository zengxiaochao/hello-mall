<template>
  <div>
    <!--表头-->
    <div class="title" style="width: 80%;margin-left: 10%;">
      <h3>收藏</h3>
      <el-table
        ref="multipleTable"
        @row-click="goDesc"
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%;">
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
        <!--        上下架状态-->
        <el-table-column label="状态"  prop="prize" width="110px" align="center">
          <template slot-scope="scope">
            <el-tag :type="goodsStatus(scope.row.status)">{{scope.row.status==1?"下架":"在售"}}</el-tag>
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
    name: "collection",
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
      }
    },
    created() {
    },
    methods:{
      goodsStatus(status)
      {
        if(status=="1")
          return "danger";
        else if(status=="2")
          return "";
      },
      goDesc(row, column, event)
      {
        this.$router.push({
          path:'/goodsDesc',
          query:{
            goods:row
          }
        });
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
