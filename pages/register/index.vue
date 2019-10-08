<template>
  <div class="box_con_right_con">
    <a href="#" class="box_con_right_con_back" onclick="javascript:window.history.back();return false;"></a>
    <div class="box_con_right_con_head">
      <span></span>
      <b>手机注册</b>
      <span></span>
    </div>
    <div class="box_con_right_con_a" style="margin-top:50px">
      <p>手机号</p>
      <input type="text" v-model="phone" />
    </div>
    <div class="box_con_right_con_a">
      <p>昵称</p>
      <input type="text" v-model="nickname" />
    </div>
    <div class="box_con_right_con_a" style="position: relative;">
      <p>短信验证码</p>
      <input type="text" v-model="code" />
      <div class="box_con_right_con_a_yanzhengma" @click="phoneCode" v-if="yanzhengBtn == 1">获取验证码</div>
      <div class="box_con_right_con_a_yanzhengma" v-if="yanzhengBtn == 2">{{time}} s</div>
      <div class="box_con_right_con_a_yanzhengma" @click="phoneCode" v-if="yanzhengBtn == 3">重新获取</div>
    </div>
    <div class="box_con_right_con_a">
      <p>密码</p>
      <input type="password" v-model="password" />
    </div>
    <div class="box_con_right_con_a">
      <p>重复密码</p>
      <input type="password" v-model="password2" />
    </div>
    <div class="box_con_right_con_btn" @click="doRedister()">注册</div>
    <div class="box_con_right_con_b">
      <p class="box_con_right_con_b_left"></p>
      <nuxt-link :to="{name: 'login', query: {href: href}}" class="box_con_right_con_b_right">已有账号，去登陆</nuxt-link>
    </div>
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
      title: "启创学院注册"
    }
  },
  name: 'register',
  data() {
    return {
      phone: "",
      password: "",
      nickname: "",
      code: "",
      password2: "",
      yanzhengBtn: 1,
      time: "300",
      href: ""
    }
  },
  mounted() {
    this.href = this.$route.query.href;
    //console.log(this.$route.query.href);
  },
  methods: {
    phoneCode(){
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
      API.getCode({phone: this.phone, type: 1}).then(res => {
        this.$alert(res.data.message, "提示", {
          confirmButtonText: "确定",            
        });
        if(res.data.code == 0){
          this.yanzhengBtn = 2;
          this.timeInt = setInterval(this.timeInt, 1000);
        }else{
          this.yanzhengBtn = 3;
        }
      })
    },
    timeInt() {
      this.time -= 1;
      if( this.time == 0){
        this.yanzhengBtn = 3;
        clearInterval(this.timeInt);
      }
    },
    doRedister(){
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
      if(!this.nickname){
        this.$alert("请输入昵称！", "提示", {
          confirmButtonText: "确定",
        });
        return false;
      }
      if(!this.code){
        this.$alert("请输入手机验证码！", "提示", {
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
      if(!this.password2){
        this.$alert("请确认密码！", "提示", {
          confirmButtonText: "确定",
        });
        return false;
      }
      if(this.password != this.password2){
        this.$alert("两次输入的密码不一致！", "提示", {
          confirmButtonText: "确定",
        });
        return false;
      }
      localStorage.removeItem("qcxy_userId");
      localStorage.removeItem("qcxy_token");
      localStorage.removeItem("qcxy_nickname");
      API.register({phone: this.phone, password: this.password, code: this.code, nickname: this.nickname}).then(res => {
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
  .box_con_right_con_a_yanzhengma{
    height: 20px;
    float: right;
    font-size: 18px;
    color: #209eea;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
  }
  .box_con_right_con_a_yanzhengma:hover{
    color: #38b4ff;
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

</style>
