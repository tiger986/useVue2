<template>
  <div class="employmentSecurity">
    <div class="employmentSecurity_box">
      <div class="employmentSecurity_box_title">
        <p class="employmentSecurity_box_title_pic1"></p>
        <span>就业学员</span>
      </div>
      <div class="employmentSecurity_box_con1">
        <div class="employmentSecurity_box_con1_li" v-for="(item,  index) in jobStudentList.list" :key="index">
          <div class="employmentSecurity_box_con1_li_pic">
            <img :src="item.pic" alt="" />
          </div>
          <div class="employmentSecurity_box_con1_li_text">
            <p style="margin-top:32px">姓名：{{item.name}}</p>
            <p>所学课程：{{item.courseName}}</p>
            <p>就业单位：{{item.company}}</p>
            <p>月薪：{{item.salary}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="employmentSecurity_box" style="margin-top:15px">
      <div class="employmentSecurity_box_title">
        <p class="employmentSecurity_box_title_pic2"></p>
        <span>就业薪资</span>
      </div>
      <div class="employmentSecurity_box_con2">
        <div class="employmentSecurity_box_con2_head">
          <p style="width:120px">姓名</p>
          <p style="width:120px">所学课程</p>
          <p style="width:120px">学历</p>
          <p style="width:80px">薪资</p>
          <p style="width:338px">就业单位</p>
        </div>
        <div id="box">
          <ul class="employmentSecurity_box_con2_con" id="con1" ref="con1" :class="{anim:animate==true}">
            <li class="employmentSecurity_box_con2_con_li" v-for="(item, index) in jobTraineeList.list" :key="index">
              <p style="width:120px">{{item.name}}</p>
              <p style="width:120px">{{item.courseName}}</p>
              <p style="width:120px">{{item.education}}</p>
              <p style="width:80px;background-color:#8EB2F2">{{item.salary}}</p>
              <p style="width:338px">{{item.company}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="employmentSecurity_box" style="background:none;margin-top:15px">
      <div class="employmentSecurity_box_title">
        <p class="employmentSecurity_box_title_pic3"></p>
        <span>招聘信息</span>
      </div>
      <div class="employmentSecurity_box_con3">
        <div class="employmentSecurity_box_con3_li" v-for="(item, index) in recruitList.list" :key="index">
          <a :href="item.url" target="_blank">
            <div class="employmentSecurity_box_con3_li_head">{{item.company}}</div>
            <p>招聘岗位：{{item.post}}</p>
            <p>岗位薪资：{{item.salary}}</p>
            <p>工作经验：{{item.experience}}</p>
            <p>工作地点：{{item.address}}</p>
            <p>工作性质：{{item.quality}}</p>
          </a>
        </div>
      </div>
    </div>
    <div style="height:60px"></div>
  </div>
</template>

<script>
import API from '~/api'
export default {
  async asyncData({ params, error, store }) {
    try {
      let [list, list2, list3] = await Promise.all([API.getJobStudent({pageNumber: 1, pageSize:6}), API.getJobTrainee({pageNumber: 1, pageSize: 50}), API.getRecruit({pageNumber: 1, pageSize: 6})]);
      //console.log(list)
      //console.log(list2)
      //console.log(list3)
      return {
        jobStudentList: list.data.data,
        jobTraineeList: list2.data.data,
        recruitList: list3.data.data
      };
    } catch (err) {
      // const code = err.response.data.code
      // const message = err.response.message
      // error({ statusCode: code, message });
    }
  },
  head() {
    return {
      title: "就业保障"
    }
  },
  name: 'employmentSecurity',
  data() {
    return {
      jobStudentList: [],
      jobTraineeList: [],
      recruitList: [],
      animate: false,
      timer: null
    }
  },
  mounted() {
    this.setInterAuto()
  },
  methods: {
    setInterAuto() {
      this.timer = setInterval(this.scroll, 2000)
    },
    scroll() {
      this.animate = true; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
      setTimeout(() => {
        this.jobTraineeList.list.push(this.jobTraineeList.list[0]);
        this.jobTraineeList.list.shift();
        this.animate = false;
      }, 500)
    }
  },
  beforeDestroy() {
    this.timer = null
    window.clearInterval()
    window.clearTimeout()
  },
 
}
</script>

<style scoped>
  .employmentSecurity{
    width: 1200px;
    min-height: 500px;
    margin: 0 auto;
    overflow: hidden;
  }
  .employmentSecurity_box{
    width: 100%;
    min-height: 300px;
    overflow: hidden;
    background-color: #ffffff;
    margin-top: 30px;
  }
  .employmentSecurity_box_title{
    width: 212px;
    height: 53px;
    margin: 20px auto 0;
  }
  .employmentSecurity_box_title_pic1{
    width: 49px;
    height: 53px;
    float: left;
    background: url("~assets/img/xueyuan.png") no-repeat center;
    background-size: 47px 53px; 
  }
  .employmentSecurity_box_title_pic2{
    width: 49px;
    height: 53px;
    float: left;
    background: url("~assets/img/xinzi.png") no-repeat center;
    background-size: 49px 47px; 
  }
  .employmentSecurity_box_title_pic3{
    width: 49px;
    height: 53px;
    float: left;
    background: url("~assets/img/drxx56.png") no-repeat center;
    background-size: 45px 43px; 
  }
  .employmentSecurity_box_title span{
    float: left;
    height: 53px;
    margin-left: 15px;
    font-size: 36px;
    line-height: 53px;
    color: #333333;
  }
  .employmentSecurity_box_con1{
    width: 1200px;
    margin-top: 20px;
    padding: 6px;
    overflow: hidden;
  }
  .employmentSecurity_box_con1_li{
    width: 368px;
    height: 210px;
    border: 1px solid #BFBFBF;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    float: left;
    margin: 0 0 21px 21px;
  }
  .employmentSecurity_box_con1_li_pic{
    width: 141px;
    height: 194px;
    float: left;
    margin: 8px 0 0 8px;
  }
  .employmentSecurity_box_con1_li_pic img{
    display: block;
    width: 141px;
    height: 194px;
  }
  .employmentSecurity_box_con1_li_text{
    width: 200px;
    height: 194px;
    float: right;
    margin: 8px 8px 0 0;
  }
  .employmentSecurity_box_con1_li_text P{
    width: 200px;
    height: 16px;
    margin-top: 21px;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .employmentSecurity_box_con2{
    width: 1144px;
    margin: 20px auto 0;
    overflow: hidden;
    box-shadow: 0 5px 10px -5px rgb(186, 227, 240);
    margin-bottom: 30px;
  }
  .employmentSecurity_box_con2_head{
    width: 1144px;
    height: 43px;
    background-color: #8EB2F2;
  }
  #box{
    width: 1144px;
    height: 191px;
    overflow: hidden;
  }
  .anim {
    transition: all 0.5s linear;
    margin-top: -47px;
  }

  #con1 li {
    list-style: none;
    line-height: 47px;
    height: 47px;
  }
  .employmentSecurity_box_con2_con{
    width: 1144px;
    overflow: hidden;
    border: 1px  solid rgb(213, 236, 243);   
    border-top: 0;
  }
  .employmentSecurity_box_con2_head p{
    height: 43px;
    float: left;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    line-height: 43px;
    margin-left: 60px;
  }
  .employmentSecurity_box_con2_con_li{
    width: 1142px;
    height: 47px;
    box-sizing: content-box;
    border-bottom: 1px solid #c4c2c2;
  }
  .employmentSecurity_box_con2_con_li:last-child{
    border-bottom: 0;
  }
  .employmentSecurity_box_con2_con_li p{
    height: 47px;
    float: left;
    font-size: 16px;
    color: #666666;
    text-align: center;
    line-height: 47px;
    margin-left: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .employmentSecurity_box_con3{
    width: 1200px;
    margin-top: 22px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .employmentSecurity_box_con3_li{
    width: 389px;
    height: 208px;
    margin: 0 5px 15px 5px;
    background-color: #ffffff;
    box-shadow: 0 5px 10px -5px rgb(184, 229, 243);
  }
  .employmentSecurity_box_con3_li_head{
    width: 389px;
    height: 46px;
    padding: 0 15px;
    font-size: 18px;
    color: #ffffff;
    line-height: 46px;
    background-color: #8EB2F2;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .employmentSecurity_box_con3_li p{
    width: 389px;
    height: 16px;
    padding: 0 15px;
    font-size: 14px;
    color: #333333;
    line-height: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 13px;
  }

</style>
