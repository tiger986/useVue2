<template>
  <div class="syllabus">
    <div class="syllabus_box" style="margin-top:0">
      <div class="syllabus_box_title">
        <p class="syllabus_box_title_pic1"></p>
        <span>课程大纲</span>
      </div>
      <div class="syllabus_box_con1">
        <img :src="headPic" alt="" />
      </div>
    </div>
    <div class="syllabus_box">
      <div class="syllabus_box_title">
        <p class="syllabus_box_title_pic2"></p>
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
              <p style="width:80px;background-color:#FF3E3E">{{item.salary}}</p>
              <p style="width:338px">{{item.company}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="syllabus_box">
      <div class="syllabus_box_title">
        <p class="syllabus_box_title_pic3"></p>
        <span>明星讲师</span>
      </div>
      <div class="syllabus_box_con2">
        <div class="syllabus_box_con2_text">
          实用案例深度解析，专业讲师为您带来设计前沿的视频教程。设计技巧全面传授，提供成长道路上必不可少的技能。
        </div>
        <div class="swiper swiperBox" v-swiper:swiper="swiperOption" ref="swiperBox">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in teacherList" :style="{backgroundImage:'url(' + item.pic + ')'}" :key="index">
              <div class="hm-flex hm-space hm-center m10">
                <div class="teacher_slot" >
                  <div class="slot__mask">
                    <p>{{item.name}}</p>
                    <p>{{item.position}}</p>
                  </div>
                  <div class="slot_mask_show">
                    <p>{{item.name}}{{item.detail}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </div>
    <div style="height:40px;"></div>
    <div style="height:80px;background: #f4f6fc;"></div>
  </div>
</template>

<script>
import API from "~/api";
export default {
  async asyncData({ params, error, store }) {
    try {
      let [list, list2] = await Promise.all([
        API.getJobTrainee({ pageNumber: 1, pageSize: 50 }),
        API.teacherGlamour()
      ]);
      //console.log(list)
      //console.log(list2)
      return {
        jobTraineeList: list.data.data,
        teacherList: list2.data.data
      };
    } catch (err) {
      // const code = err.response.data.code
      // const message = err.response.message
      // error({ statusCode: code, message });
    }
  },
  head() {
    return {
      title: "课程大纲"
    };
  },
  name: "syllabus",
  data() {
    return {
      swiperOption: {
        // loop: true,
        // speed: 500,
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        // notNextTick: true,
        // slidesPerView: 'auto',
        // centeredSlides: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChange() {
            // console.log('onSlideChangeEnd', this);
          },
          tap() {
            // console.log('onTap', this);
          }
        },
        // autoplayDisableOnInteraction: false,
        // // effect:'cube',
        // preloadImages: false,
        lazy: true,
        slidesPerView: 5,
        spaceBetween: 30
      },
      headPic: "",
      jobTraineeList: [],
      teacherList: [],
      animate: false,
      timer: null
    };
  },
  mounted() {
    this.getPic();
    this.setInterAuto();
  },
  methods: {
    getPic() {
      API.getOutlinePic({ id: this.$route.params.id }).then(res => {
        this.headPic = res.data.data.outlinePic;
        //console.log(this.headPic);
      });
    },
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
  }
};
</script>

<style lang="scss" scoped>
.syllabus {
  width: 1200px;
  min-height: 300px;
  margin: 0 auto;
  overflow: hidden;
  background-color: #ffffff;
  margin-top: 30px;
}
.syllabus_box {
  width: 100%;
  // overflow: hidden;
  margin-top: 45px;
}
.syllabus_box_title {
  width: 212px;
  height: 53px;
  margin: 20px auto 0;
}
.syllabus_box_title_pic1 {
  width: 52px;
  height: 51px;
  float: left;
  background: url("~assets/img/kechengdagang.png") no-repeat center;
  background-size: 52px 51px;
}
.syllabus_box_title_pic2 {
  width: 52px;
  height: 51px;
  float: left;
  background: url("~assets/img/xinzi.png") no-repeat center;
  background-size: 49px 47px;
}
.syllabus_box_title_pic3 {
  width: 52px;
  height: 51px;
  float: left;
  background: url("~assets/img/mingxingjiangshi.png") no-repeat center;
  background-size: 43px 33px;
}
.syllabus_box_title span {
  float: left;
  height: 51px;
  margin-left: 15px;
  font-size: 36px;
  line-height: 51px;
  color: #333333;
}
.syllabus_box_con1 {
  width: 992px;
  height: 254px;
  margin: 30px auto 0;
}
.syllabus_box_con1 img {
  display: block;
  width: 992px;
  height: 254px;
}
.employmentSecurity_box_con2 {
  width: 1144px;
  margin: 30px auto 0;
  overflow: hidden;
  box-shadow: 0 5px 10px -5px rgb(186, 227, 240);
}
.employmentSecurity_box_con2_head {
  width: 1144px;
  height: 43px;
  background-color: #ff3e3e;
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
.employmentSecurity_box_con2_con {
  width: 1144px;
  overflow: hidden;
  border: 1px solid rgb(213, 236, 243);
  border-top: 0;
}
.employmentSecurity_box_con2_head p {
  height: 43px;
  float: left;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  line-height: 43px;
  margin-left: 60px;
}
.employmentSecurity_box_con2_con_li {
  width: 1142px;
  height: 47px;
  box-sizing: content-box;
  border-bottom: 1px solid #c4c2c2;
}
.employmentSecurity_box_con2_con_li:last-child {
  border-bottom: 0;
}
.employmentSecurity_box_con2_con_li p {
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
.syllabus_box_con2 {
  width: 1144px;
  margin: 28px auto 0;
  overflow: hidden;
}
.syllabus_box_con2_text {
  width: 100%;
  height: 16px;
  font-size: 14px;
  color: #666666;
  line-height: 16px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 30px;
}
.teacher_slot {
  width: 190px;
  height: 210px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  .slot__mask {
    // position: absolute;
    // bottom: 0;
    width: inherit;
    height: 60px;
    background: rgba(84, 88, 92, 0.7);
    border-radius: 0 0 4px 4px;
    text-align: center;
    margin-top: 150px;
    transition: all 0.5s ease-in-out;

    p {
      font-size: 16px;
      color: #fff;
      font-weight: 500;

      &:nth-of-type(1) {
        padding-top: 10px;
      }
    }
  }

  &:hover .slot__mask {
    margin-top: -60px;
  }

  .slot_mask_show {
    height: 100%;
    width: 100%;
    padding: 0 20px;
    display: table;
    overflow: hidden;
    background: rgba(84, 88, 92, 0.8);

    p {
      vertical-align: middle;
      text-align: left;
      text-align: justify;
      text-justify: inter-ideograph;
      display: table-cell;
      line-height: 1.5;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      font-size: 16px;
      color: #fff;
      font-weight: 500;
      display: table-cell;
    }
  }
}
</style>
