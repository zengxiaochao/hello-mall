<template>
  <div style="text-align: center;width: 20%;margin-left: 40%;margin-top: 30px;">

   <div>
     <el-upload
       class="avatar-uploader"
       action="https://jsonplaceholder.typicode.com/posts/"
       :show-file-list="false"
       :on-success="handleAvatarSuccess"
       :before-upload="beforeAvatarUpload">
       <img v-if="form.img" :src="form.img" class="avatar">
       <i v-else class="el-icon-plus avatar-uploader-icon"></i>
     </el-upload>
   </div>
    <br>


    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name" size="medium" :disabled="editable"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.tel" size="medium" :disabled="editable"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件">
        <el-input v-model="form.email" size="medium" :disabled="editable"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" v-show="!editable">提交修改</el-button>
        <el-button type="primary" @click="editabled" v-show="editable">修改个人信息</el-button>
        <el-button type="primary" @click="editPwd" v-show="editable">修改密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
      name: "userInfo",
      data() {
        return {
          editable:true,
          imageUrl: '',
          form: {
            name:'admin',
            tel:'17654255635',
            email:'zengxiaochao666@163.com',
            img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2057588226,2402156864&fm=11&gp=0.jpg'

          }
        }
      },
      methods: {
        onSubmit() {
          this.editable = !this.editable;
        },
        editabled() {
          this.editable = !this.editable;
        },
        editPwd() {

        },
        handleAvatarSuccess(res, file) {
          this.form.img = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isPng = file.type === 'image/png';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        }
      }
    }
</script>

<style scoped>

  .avatar {
    width: 100px;
    height: 100px;
  }
  /deep/ .el-upload{
    width: 100px;
    height: 100px;
    line-height: 100px;
    margin-left: 60px;
  }

</style>
