<template>
  <div class="cadetStyle">
    <div class="cadetStyle_box1">
      <div class="cadetStyle_box_title">
        <p class="cadetStyle_box_title_pic1"></p>
        <span>学生活动</span>
      </div>
      <div class="cadetStyle_box1_li" v-for="(item, index) in studentActiveList" :key="index">
        <div class="cadetStyle_box1_li_a" v-if="index%2==0">
          <div class="cadetStyle_box1_li_pic">
            <img :src="item.pic" alt="">
          </div>
          <div class="cadetStyle_box1_li_text">{{item.detail}}</div>
        </div>
        <div class="cadetStyle_box1_li_b" v-else>
          <div class="cadetStyle_box1_li_text" style="float:left">{{item.detail}}</div>
          <div class="cadetStyle_box1_li_pic" style="float:right">
            <img :src="item.pic" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="cadetStyle_box2">
      <div class="cadetStyle_box_title">
        <p class="cadetStyle_box_title_pic2"></p>
        <span>学生感言</span>
      </div>
      <div style="height:30px"></div>
      <div class="cadetStyle_box2_li" v-for="(item, index) in StudentGlamourList" :key="index">
        <div class="cadetStyle_box2_li_a" v-if="index%2==0">
          <div class="cadetStyle_box2_li_picBox">
            <div class="cadetStyle_box2_li_picBox_img">
              <img :src="item.pic" alt="" />
            </div>
            <p class="cadetStyle_box2_li_picBox_name">{{item.name}}</p>
          </div>
          <div class="cadetStyle_box2_li_textBox">
            <p class="cadetStyle_box2_li_textBox_title">{{item.intro}}</p>
            <p class="cadetStyle_box2_li_textBox_detail">{{item.detail}}</p>
          </div>
        </div>
        <div class="cadetStyle_box2_li_b" v-else>
          <div class="cadetStyle_box2_li_textBox" style="float:left;margin: 0 0 0 18px;">
            <p class="cadetStyle_box2_li_textBox_title">{{item.intro}}</p>
            <p class="cadetStyle_box2_li_textBox_detail">{{item.detail}}</p>
          </div>
          <div class="cadetStyle_box2_li_picBox" style="float:right;margin: 0 18px 0 0;">
            <div class="cadetStyle_box2_li_picBox_img">
              <img :src="item.pic" alt="" />
            </div>
            <p class="cadetStyle_box2_li_picBox_name">{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <div style="height:80px"></div>
  </div>
</template>

<script>
import API from "~/api";
export default {
  async asyncData({ params, error, store }) {
    try {
      let [list, list2] = await Promise.all([API.getStudentActive(), API.getStudentGlamour()]);
      //console.log(list);
      //console.log(list2);
      return {
        studentActiveList: list.data.data,
        StudentGlamourList: list2.data.data
      };
    } catch (err) {
      // const code = err.response.data.code
      // const message = err.response.message
      // error({ statusCode: code, message });
    }
  },
  head() {
    return {
      title: "学员风采"
    };
  },
  name: "cadetStyle",
  data() {
    return {
      studentActiveList: [],
      StudentGlamourList: []
    };
  }
};
</script>

<style scoped>
.cadetStyle {
  width: 1200px;
  min-height: 500px;
  margin: 0 auto;
  overflow: hidden;
}
.cadetStyle_box1 {
  width: 100%;
  background-color: #ffffff;
  padding: 0 35px 40px;
  overflow: hidden;
  margin-top: 30px;
}
.cadetStyle_box2 {
  width: 100%;
  background-color: #ffffff;
  padding: 0 35px 40px;
  overflow: hidden;
  margin-top: 25px;
}
.cadetStyle_box_title {
  width: 212px;
  height: 45px;
  margin: 25px auto 0;
}
.cadetStyle_box_title_pic1 {
  width: 43px;
  height: 45px;
  float: left;
  background: url("~assets/img/xinzi.png") no-repeat center;
  background-size: 43px 45px;
}
.cadetStyle_box_title_pic2 {
  width: 43px;
  height: 45px;
  float: left;
  background: url("~assets/img/drxx56.png") no-repeat center;
  background-size: 40px 45px;
}
.cadetStyle_box_title span {
  float: left;
  height: 45px;
  margin-left: 15px;
  font-size: 36px;
  line-height: 45px;
  color: #333333;
}
.cadetStyle_box1_li {
  width: 1130px;
  overflow: hidden;
}
.cadetStyle_box1_li_a,
.cadetStyle_box1_li_b {
  width: 100%;
  height: 222px;
  margin-top: 50px;
}
.cadetStyle_box1_li_pic {
  width: 362px;
  height: 222px;
  float: left;
}
.cadetStyle_box1_li_pic img {
  display: block;
  width: 362px;
  height: 222px;
}
.cadetStyle_box1_li_text {
  width: 746px;
  height: 222px;
  float: right;
  font-size: 14px;
  color: #333333;
  line-height: 22px;
  overflow: hidden;
}
.cadetStyle_box2_li{
  width: 1130px;
  overflow: hidden; 
}
.cadetStyle_box2_li_a, .cadetStyle_box2_li_b{
  width: 100%;
  height: 176px;
  background-color: #F5F5F5;
  margin-top: 12px;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
}
.cadetStyle_box2_li_picBox{
  width: 121px;
  height: 176px;
  float: left;
  margin: 0 0 0 18px;
}
.cadetStyle_box2_li_picBox_img{
  width: 121px;
  height: 121px;
  margin-top: 17px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  overflow: hidden;
}
.cadetStyle_box2_li_picBox_img img{
  display: block;
  width: 121px;
  height: 121px;
}
.cadetStyle_box2_li_picBox_name{
  width: 121px;
  height: 14px;
  margin-top: 8px;
  font-size: 12px;
  color: #333333;
  line-height: 14px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cadetStyle_box2_li_textBox{
  width: 960px;
  height: 176px;
  float: right;
  margin:  0 18px 0 0;
}
.cadetStyle_box2_li_textBox_title{
  width: 100%;
  height: 18px;
  margin-top: 37px;
  font-size: 16px;
  line-height: 18px;
  color: #333333;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cadetStyle_box2_li_textBox_detail{
  width: 100%;
  height: 66px;
  margin-top: 12px;
  font-size: 14px;
  line-height: 22px;
  color: #333333;
  overflow: hidden;
}
</style>
