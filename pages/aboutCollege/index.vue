<template>
  <div class="aboutCollege">
    <div class="aboutCollege_a">
      <div class="aboutCollege_a_con">
        <div class="aboutCollege_a_con_guanyuxueyuan">
          <img src="~assets/img/xueyuanjianjieImg.png" alt="">
        </div>
      </div>
    </div>
    <div class="aboutCollege_b" style="width:1228px">
      <div class="aboutCollege_b_title">COLLEGE CONCEPT/学院理念</div>
      <div class="aboutCollege_b_line">
        <p></p>
      </div>
      <div class="aboutCollege_b_content1">
        <img src="~assets/img/xueyuanjianjie6-1.png" alt="" />
        <img src="~assets/img/xueyuanjianjie6-2.png" alt="" />
        <img src="~assets/img/xueyuanjianjie6-3.png" alt="" />
        <img src="~assets/img/xueyuanjianjie6-4.png" alt="" />
        <img src="~assets/img/xueyuanjianjie6-5.png" alt="" />
      </div>
      <div class="aboutCollege_b_content2">
        <img src="~assets/img/xueyuanjianjie7.png" alt="">
      </div>
    </div>
    <div class="aboutCollege_b" style="margin-top:30px;background-color:#ffffff">
      <div class="aboutCollege_a_con_title" style="margin-top:50px">企业合作</div>
      <div class="aboutCollege_b_con">
        <img src="~assets/img/xueyuanjianjie4-4.png" alt="" />
        <img src="~assets/img/xueyuanjianjie4-2.png" alt="" />
        <img src="~assets/img/xueyuanjianjie4-3.png" alt="" />
        <img src="~assets/img/xueyuanjianjie4-1.png" alt="" />
      </div>
    </div>
    <div class="aboutCollege_a" style="margin-top:0">
      <div class="aboutCollege_a_con">
        <div class="aboutCollege_a_con_title" style="margin-top:50px">院校合作</div>
        <div class="aboutCollege_a_con_yuanxiao">
          <img src="~assets/img/xueyuanjianjie5-1.png" alt="" />
          <img src="~assets/img/xueyuanjianjie5-2.png" alt="" />
          <img src="~assets/img/xueyuanjianjie5-3.png" alt="" />
        </div>
      </div>
    </div>
    <div class="aboutCollege_a" style="margin-top:0">
      <div class="aboutCollege_a_con">
        <div class="aboutCollege_a_con_title" style="margin-top:40px">社会招生</div>
        <div class="aboutCollege_a_con_text">
          启创学院开展线下培训班级，要向社会招生，培养高素质能力的互联网人才，<br />
          提供高薪就业和优质课程内容，并进行企业实战训练
        </div>
      </div>
    </div>   
    <div class="aboutCollege_a" style="margin-top:0">
      <div class="aboutCollege_a_con">
        <div class="aboutCollege_a_con_title" style="margin-top:38px">联系我们</div>
        <div class="aboutCollege_a_con_text">
          地址：北京市昌平区建材城西路金燕龙办公楼一层<br />
          联系方式：010-6738925
        </div>
      </div>
    </div> 
    <div style="height:80px;background-color:#ffffff"></div>
  </div>
</template>

<script>
import API from '~/api'
export default {
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
      title: "关于学院"
    }
  },
  name: 'aboutCollege',
 
}
</script>

<style scoped>
  .aboutCollege{
    width: 100%;
    min-height: 500px;
    overflow: hidden;
  }
  .aboutCollege_a{
    width: 100%;
    padding: 0 0 20px 0;
    background-color: #ffffff;
    margin-top: 15px;
  }
  .aboutCollege_a_con{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .aboutCollege_a_con_guanyuxueyuan{
    width: 1200px;
    height: 470px;
    margin-top: 20px;
  }
  .aboutCollege_a_con_guanyuxueyuan img{
    display: block;
    width: 1200px;
    height: 470px;
  }
  .aboutCollege_a_con_title{
    width: 100%;
    height: 28px;
    margin-top: 18px;
    font-size: 24px;
    color: #000000;
    line-height: 28px;
    text-align: center;
  }
  .aboutCollege_a_con_down{
    width: 100%;
    height: 290px;
    margin-top: 30px;
  }
  .aboutCollege_a_con_down_pic{
    width: 390px;
    height: 294px;
    float: left;
    background: url("~assets/img/xueyuanjianjie.png") no-repeat center;
    background-size: 390px 294px; 
  }
  .aboutCollege_a_con_down_text{
    width: 750px;
    height: 185px;
    float: right;
    margin-top: 50px;
    font-size: 16px;
    color: #575757;
    line-height: 26px;
    overflow: hidden;
    text-indent: 32px;
  }
  .aboutCollege_b{
    width: 1200px;
    margin: 20px auto 0;
    overflow: hidden;
  }
  .aboutCollege_b_title{
    width: 1200px;
    height: 22px;
    font-size: 18px;
    color: #1A1A1A;
    line-height: 22px;
    margin: 10px auto 0;
  }
  .aboutCollege_b_line{
    width: 1200px;
    height: 4px;
    margin: 13px auto 0;
    border-bottom: 1px solid #e5e5ee;
  }
  .aboutCollege_b_line p{
    width: 62px;
    height: 4px;
    background-color: #209eea;
  }
  .aboutCollege_b_content1{
    width: 100%;
    height: 208px;
    margin-top: 16px;
  }
  .aboutCollege_b_content1 img{
    width: 245px;
    height: 207px;
    float: left;
  }
  .aboutCollege_b_content2{
    width: 1200px;
    height: 503px;
    margin: 12px auto 0;
  }
  .aboutCollege_b_content2 img{
    display: block;
    width: 1200px;
    height: 503px;
  }
  .aboutCollege_c{
    width: 100%;
    margin-top: 30px;
    overflow: hidden;
  }
  .aboutCollege_c img{
    width: 100%;
  }
  .aboutCollege_b_con{
    width: 100%;
    height: 246px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
  .aboutCollege_b_con img{
    display: block;
    width: 246px;
    height: 246px;
  }
  .aboutCollege_a_con_yuanxiao{
    width: 1200px;
    height: 394px;
    margin-top: 45px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
  .aboutCollege_a_con_yuanxiao img{
    display: block;
    width: 300px;
    height: 394px;
  }
  .aboutCollege_a_con_text{
    width: 798px;
    margin: 35px auto 0;
    font-size: 20px;
    color: #666666;
    line-height: 34px;
    text-align: center;
    overflow: hidden;
  }

</style>
