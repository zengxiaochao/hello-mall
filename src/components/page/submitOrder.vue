<template>
    <div style="width: 40%;margin-left: 30%">
      <!-- 订单确认窗口 -->
      <p style="width:100%;background:#2db7f5; line-height:50px; font-size:18px; text-align:center;color:#fff"><b>您的订单详情</b></p>
      <div id="box1" >
        <p>商品名称：32</p>
        <p>订单编号：42080ECCE11302A6</p>
        <p>支付金额：<font color="red">213.00</font>元</p>
        <p>购买数量：<font color="red">1</font></p>
        <p>联系信息：18888888888</p>
        <p>状态：未付款</p>
        <p>支付方式：
          <el-select v-model="payWay" slot="prepend" placeholder="请选择支付方式">
            <el-option label="支付宝" value="1"></el-option>
            <el-option label="微信" value="2"></el-option>
          </el-select>
        </p>
        <div class="paybtn" id="d1">
          <button class="btn1" name="submit" type="submit">
            立即付款
          </button>
        </div>
        <div style="clear:both"></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "submitOrder",
      data(){
        return{
          payWay:'1',
        }
      }
    }
</script>

<style scoped>
  #box1 {
    background: #fff;
    padding: 20px;
  }
  #box1 p {
    font-size: 16px;
    font-family: 'Microsoft YaHei';
    text-align: left;
  }

  .btn1 {
    float: left;
    height: 40px;
    width: 230px;
    background: #ff771a;
    text-align: center !important;
    line-height: 40px;
    border-radius: 3px;
    font-size: 14px;
    font-weight:bold;
    margin-right: auto;
    margin-top: 20px;
    margin-left: 25px;
    color: #fff;
    border:none;
    cursor:pointer;
  }

</style>
