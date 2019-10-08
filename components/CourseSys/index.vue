<template>
    <!-- <el-container class="hm-center"> -->
    <div>
        <div class="hm-flex hm-center" v-for="(item, index) in courseSystem" :key="index">
            <el-aside style="width:266px;margin-left: 20px;position:relative;">
                <img :src="item.coursePic" width="266" height="435" alt="">
                <nuxt-link :to="{ name: 'curriculumSystem-id', params: { id: item.id }}" class="block sys_jump">
                    <p class="course_cate_info_title">课程体系</p>
                </nuxt-link>
            </el-aside>
            <el-main>
                <div class="course_aside hm-flex hm-space">
                    <div class="course_aside_l">
                        <h2>{{item.courseTitle}}</h2>
                        <div class="hm-flex course_intro_text">
                            <div class="course_intro_text_detail">
                                <p>免费课程</p>
                                <p>{{item.freecourseNum}}</p>
                            </div>
                            <div class="course_intro_text_detail">
                                <p>开班时间</p>
                                <p>{{item.signStartTime}}</p>
                            </div>
                            <div class="course_intro_text_detail">
                                <p>课时总长</p>
                                <p>{{item.duration}}</p>
                            </div>
                        </div>
                        <nuxt-link :to="{ name: 'signUp' }" class="block">
                            <div class="start_sign">开始报名</div>
                        </nuxt-link>
                        <div class="loop">
                            <animate-slide :items="item.className"></animate-slide>
                        </div>
                    </div>

                    <div class="course_aside_r">
                        <div class="course_jump_con hm-flex hm-space hm-center">
                            <div class="hm-flex hm-center">
                                <img src="~assets/images/course_jg.png" width="32" height="29" style="margin-right:7px;" alt="">
                                <nuxt-link :to="{ name: 'syllabus-id', params: { id: item.id }}" class="block">
                                    <p class="course_cate_info_title">课程大纲></p>
                                    <p>点击查看更多内容</p>
                                </nuxt-link>
                            </div>
                            <div class="hm-flex hm-center">
                                <img src="~assets/images/jiuyexz.png" width="33" height="31" style="margin-right:7px;" alt="">
                                <nuxt-link :to="{ name: 'employmentSecurity' }" class="block">
                                    <p class="course_cate_info_title">就业现状></p>
                                    <p>点击查看更多内容</p>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="course_img_inro hm-flex hm-space">
                            <img :src="item.outlinePic" width="166" height="75" alt="">
                            <img :src="item.workPic" width="166" height="75" alt="">
                        </div>
                        <div class="short_icon">
                            <img src="~assets/images/course_cate.png" width="24" height="20" alt="">
                            课程分类
                        </div>
                        <!-- <carousel :heights="140" > -->
                        <img :src="item.classPic" heights="140" alt="">
                        <!-- </carousel> -->
                    </div>
                </div>
            </el-main>
        </div>
    </div>

    <!-- </el-container> -->
</template>

<script>
    // import Carousel from '~/components/Carousel'
    import AnimateSlide from '~/components/Animate'
    export default {
        data() {
            return {

            }
        },
        name: 'CourseSys',
        components: {
            // Carousel,
            AnimateSlide
        },
        props: ["courseSystem"]
    }
</script>

<style lang="scss" >
    .sys_jump {
        position: absolute;
        bottom: 15px;
        left: 27%;
        & p {
            font-size:16px;
            border:1px solid #eee;
            padding: 5px 30px;
            border-radius: 10px;
            color:#fff;
        }
    }

    .course_sys {
        background: #fff;
        margin: 19px 0;
        overflow: hidden;

        .course_class_title {
            padding: 46px 0 36px;
            border-bottom: 2px solid #F4F4F4;

            h1 {
                font-size: 30px;
                color: rgba(51, 51, 51, 1);
                padding-left: 8px;
            }
        }

        .course_aside {
            height: 435px;
            border: 2px solid rgba(101, 180, 236, 1);
            border-radius: 10px;
            padding: 44px 40px 48px 35px;

            .course_aside_l {
                h2 {
                    font-size: 28px;
                    color: rgba(51, 51, 51, 1);
                    padding-bottom: 59px;
                    text-align: center;
                }

                .course_intro_text {
                    font-size: 14px;
                    color: rgba(102, 102, 102, 1);
                    font-weight: 400;
                    padding-bottom: 49px;

                    .course_intro_text_detail {
                        border-right: 1px solid #cccccc;
                        text-align: center;
                        padding-right: 27px;

                        &:nth-of-type(3) {
                            border-right: none;
                            padding-right: 0;
                            padding-left: 27px;
                        }

                        &:nth-of-type(2) {
                            padding-left: 27px;
                        }

                        & p:nth-of-type(2n) {
                            font-size: 18px;
                            font-weight: 500;
                            padding-top: 11px;
                        }
                    }

                }

                .start_sign {
                    width: 187px;
                    line-height: 41px;
                    text-align: center;
                    font-size: 14px;
                    color: #fff;
                    padding-bottom: 52px;
                    margin: 0 auto;
                    background: url("~assets/images/btn.png") no-repeat;
                }

                .loop {
                    font-size: 14px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(51, 51, 51, 1);
                    opacity: 0.73;
                    text-align: center;
                }
            }

            .course_aside_r {
                flex-basis: 286px;

                .course_jump_con {
                    margin-bottom: 21px;

                    .course_cate_info_title {
                        font-size: 18px;
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        color: rgba(51, 51, 51, 1);

                        &+p {
                            font-size: 12px;
                            font-family: PingFangSC-Regular;
                            font-weight: 400;
                            color: rgba(153, 153, 153, 1);

                        }
                    }
                }

                .short_icon {
                    margin: 33px 0 14px;
                }
            }
        }
    }
</style>