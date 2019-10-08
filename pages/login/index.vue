<template>
  <div class="box_con_right_con">
    <a href="#" class="box_con_right_con_back" onclick="javascript:window.history.back();return false;"></a>
    <div class="box_con_right_con_head">
      <span></span>
      <b>手机登录</b>
      <span></span>
    </div>
    <div class="box_con_right_con_a" style="margin-top:50px">
      <p>手机号</p>
      <input type="text" v-model="phone" />
    </div>
    <div class="box_con_right_con_a">
      <p>密码</p>
      <input type="password" v-model="password" />
    </div>
    <div class="box_con_right_con_btn" @click="doLogin()">登录</div>
    <div class="box_con_right_con_b">
      <nuxt-link :to="{name: 'forgetPassword', query: {href: href}}" class="box_con_right_con_b_left">忘记密码?</nuxt-link>
      <nuxt-link :to="{name: 'register', query: {href: href}}" class="box_con_right_con_b_right">去注册</nuxt-link>
    </div>
    <div class="box_con_right_con_head">
      <span style="width:134px"></span>
      <b style="width:134px">第三方登录</b>
      <span style="width:134px"></span>
    </div>
    <div class="box_con_right_con_weixin"></div>
  </div>
</template>

<script>
import API from '~/api'
export default {
  layout: 'loginAbout',
  async asyncData ({ params, error, store }) {
    try {
      
      return {
        
      }
    } catch (err) {
        console.log(err) 
    }
  },
  head () {
    return {
      title: "启创学院登录"
    }
  },
  name: 'login',
  data() {
    return {
      phone: "",
      password: "",
      href: ""
    }
  },
  mounted() {
    this.href = this.$route.query.href;
    //console.log(this.$route.query.href);
  },
  methods: {
    doLogin(){ 
      if(!this.phone){
        this.$alert("请输入手机号！", "提示", {
          confirmButtonText: "确定",
        });
        return false;
      }
      if(!(/^1[34578]\d{9}$/.test(this.phone))){ 
        this.$alert("请输入正确的手机号码！", "提示", {
          confirmButtonText: "确定",            
        });  
        return false; 
      }
      if(!this.password){
        this.$alert("请输入密码！", "提示", {
          confirmButtonText: "确定",
        });
        return false;
      }
      localStorage.removeItem("qcxy_userId");
      localStorage.removeItem("qcxy_token");
      localStorage.removeItem("qcxy_nickname");
      API.login({phone: this.phone, password: this.password}).then(res => {
        if(res.data.code == 0){
          localStorage.setItem("qcxy_userId", res.data.data.id);
          localStorage.setItem("qcxy_token", res.data.data.token);
          localStorage.setItem("qcxy_nickname", res.data.data.nickname);
          if(this.$route.query.href){
            this.$router.push(this.$route.query.href);
          }else{
            this.$router.push('/');
          }          
        }else{
          this.$alert(res.data.message, "提示", {
            confirmButtonText: "确定",            
          });
        }
      })
    }
  }

 
}
</script>

<style scoped>
  .box_con_right_con{
    width: 650px;
    height: 680px;
    padding: 0 124px;
    margin: 20px auto 0;
    border-radius: 6px;
    box-shadow: 0 0 40px rgb(226, 240, 250);
    overflow: hidden;
    position: relative;
  }
  .box_con_right_con_back{
    display: block;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 8px;
    right: 8px;
    background: url("../../assets/img/guanbi.png") no-repeat center;
    background-size: 14px 14px;
    cursor: pointer;
  }
  .box_con_right_con_back:hover{
    background-size: 16px 16px;
  }
  .box_con_right_con_head{
    width: 402px;
    height: 28px;
    margin-top: 80px;
  }
  .box_con_right_con_head span{
    float: left;
    width: 145px;
    height: 1px;
    background-color: #E9E9E9;
    margin-top: 14px;
  }
  .box_con_right_con_head b{
    float: left;
    width: 112px;
    height: 28px;
    font-size: 24px;
    color: #000000;
    line-height: 28px;
    text-align: center;
    font-weight: normal;
  }
  .box_con_right_con_a{
    width: 402px;
    height: 40px;
    margin-top: 30px;
    border-bottom: 1px solid #E9E9E9;
  }
  .box_con_right_con_a p{
    height: 20px;
    float: left;
    font-size: 18px;
    color: #666666;
    line-height: 20px;
  }
  .box_con_right_con_a input{
    width: 195px;
    height: 20px;
    float: left;
    font-size: 18px;
    color: #666666;
    line-height: 20px;
    border: 0;
    background: none;
    outline: none;
    margin-left: 18px;
  }
  .box_con_right_con_btn{
    width: 402px;
    height: 50px;
    margin-top: 60px;
    background-color: #209eea;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
    border-radius: 4px; 
    -webkit-border-radius: 4px; 
    -moz-border-radius: 4px;
    cursor: pointer; 
  }
  .box_con_right_con_btn:hover{
    background-color: #38b4ff;
  }
  .box_con_right_con_b{
    width: 402px;
    height: 18px;
    margin-top: 30px;
  }
  .box_con_right_con_b_left{
    height: 18px;
    float: left;
    font-size: 16px;
    color: #999999;
    line-height: 18px;
    cursor: pointer;
  }
  .box_con_right_con_b_left:hover{
    color: #666666;
  }
  .box_con_right_con_b_right{
    height: 18px;
    float: right;
    font-size: 16px;
    color: #209eea;
    line-height: 18px;
    cursor: pointer;
  }
  .box_con_right_con_b_right:hover{
    color: #38b4ff;
  }
  .box_con_right_con_weixin{
    width: 44px;
    height: 36px;
    margin: 40px auto 0;
    background: url("../../assets/img/weixin.png") no-repeat center;
    background-size: 44px 36px;
    cursor: pointer;
  }

</style>
