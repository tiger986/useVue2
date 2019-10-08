<template>
  <div class="box_con_right_con">
    <a href="#" class="box_con_right_con_back" onclick="javascript:window.history.back();return false;"></a>
    <div class="box_con_right_con_head">
      <span></span>
      <b>绑定手机号</b>
      <span></span>
    </div>
    <div class="box_con_right_con_a" style="margin-top:50px">
      <p>请输入手机号</p>
      <input type="text" />
    </div>
    <div class="box_con_right_con_a" style="position: relative;">
      <p>短信验证码</p>
      <input type="password" />
      <div class="box_con_right_con_a_yanzhengma">获取验证码</div>
    </div>
    <div class="box_con_right_con_btn">确定</div>
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
      title: "启创学院绑定手机号"
    }
  },
  name: 'bindPhone',
 
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
    width: 16px;
    height: 26px;
    position: absolute;
    top: 8px;
    left: 8px;
    background: url("../../assets/img/fanhui.png") no-repeat center;
    background-size: 12px 20px;
    cursor: pointer;
  }
  .box_con_right_con_back:hover{
    background-size: 14px 22px;
  }
  .box_con_right_con_head{
    width: 402px;
    height: 28px;
    margin-top: 80px;
  }
  .box_con_right_con_head span{
    float: left;
    width: 134px;
    height: 1px;
    background-color: #E9E9E9;
    margin-top: 14px;
  }
  .box_con_right_con_head b{
    float: left;
    width: 134px;
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

</style>
