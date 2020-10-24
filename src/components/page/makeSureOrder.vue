<template>
  <div>

<!--    地址-->
    <div style="width: 90%;margin-left: 10%;">
        <div style="width: 23%;float: left;margin-left: 20px;margin-bottom: 10px;"
             v-for="(item, index) in userAddress"
             @click="setFirst(index)">
<!--          地址卡片-->
          <el-card class="box-card" :style="item.isFirst==1?'background: #F2F8FE':'background: #606266'">
            <div slot="header" class="clearfix">
              <span>{{item.isFirst==1?"默认地址":"备用地址"}}</span>
<!--              设置默认按钮-->
              <el-button style="float: right; padding: 3px 0"
                         type="text"
                         v-show="item.isFirst==1?false:true">
                设置为默认
              </el-button>
<!--              选中标志-->
              <el-button style="float: right; padding: 3px 0"
                         type="success" icon="el-icon-check"
                         v-show="item.isFirst==1?true:false">
              </el-button>
<!--              地址具体信息-->
            </div>
            <p>{{item.name}}</p>
            <p>{{item.tel}}</p>
            <p>{{item.loc}}</p>
            <p>{{item.loc2}}</p>
          </el-card>
        </div>
    </div>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <!--表头-->
    <div class="title" style="width: 80%;margin-left: 10%;">
      <h3>确认订单</h3>
      <el-table
        ref="multipleTable"
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
        <!--        商品数量-->
        <el-table-column label="数量"  prop="num" width="140px" align="center">
          <template slot-scope="scope">
            <span>{{scope.row.nums}}</span>
          </template>
        </el-table-column>
        <!--        商品小计-->
        <el-table-column label="小计"  prop="allPrize" width="110px" align="center">
          <template slot-scope="scope">
            <span>&yen;</span>{{parseFloat(scope.row.price*scope.row.nums).toFixed(2)}}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="width: 80%;margin-left: 10%;">

      <!--描述：商品结算开始-->
      <div class="balance">
        <ul class="balance_ul1">
          <span class="balance_ul2">
              <span>共<span class="spanText">{{changeNumPri(1)}}</span>件商品</span>
              <span>总价<span class="spanText">&yen;{{changeNumPri(2)}}</span></span>
              <span>
                 <router-link to="/submitOrder">
                    <el-button>提交订单</el-button>
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
    name: "makeSureOrder",
    data()
    {
      return{
        tableData: [{
          name: '华为P40 Pro',
          price:5988.00,
          status:"2",
          img:"http://05imgmini.eastday.com/mobile/20200507/20200507135939_9e1683aae3ee6fe14f853d422cdc32be_2.jpeg",
          nums:1
        }, {
          name: 'iPhone 11 Pro Max',
          price:6338.90,
          status:"2",
          img:"https://img12.360buyimg.com/n1/jfs/t1/68636/31/9824/169738/5d780ed7E97e88252/7b62380330636738.jpg",
          nums:2
        }],
        userAddress:[{
            name: '光头强',
            tel:'17654236555',
            loc:"山东省烟台市白云区关东升街道",
            loc2:"黑土大学",
            isFirst:1
          },{
            name: '泡泡',
            tel:'16548965754',
            loc:"青范省富华市白云区关东升街道",
            loc2:"黑土大学",
            isFirst:2
          },{
            name: '光头强',
            tel:'17654236555',
            loc:"山东省烟台市白云区关东升街道",
            loc2:"黑土大学",
            isFirst:2
          }
        ],
        search : '',
        //选中列表
        multipleSelection : [],
      }
    },
    created() {
    },
    methods:{
      setFirst(index)
      {
        const length = this.userAddress.length;
        for (let i = 0; i < length; i++) {
            this.userAddress[i].isFirst = 2;
        }
        this.userAddress[index].isFirst = 1;
      }
      ,goodsStatus(status)
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
