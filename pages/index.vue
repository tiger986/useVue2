<template>
    <section class="container">
        <!-- <carousel :heights="490" :carouselData="contentList.banners">
            <div slot="banner" slot-scope="props">
                <img :src="props.studentData.path" alt="">
            </div>
        </carousel> -->
        <div class="w1200">
            <el-row>
                <el-col :span="6" v-for="item in category" :key="item.id">
                    <el-card shadow="hover">
                        <nuxt-link :to="{ name: item.name}">
                            <div class="hm-flex hm-center c-pointer">

                                <img :src="item.img" width="58" height="58" style="margin-right:18px;" alt>
                                <div>
                                    <p class="catalog_name">{{item.title}}</p>
                                    <p class="catalog_intro">{{item.intro}}</p>
                                </div>
                            </div>
                        </nuxt-link>

                    </el-card>
                </el-col>
            </el-row>
            <div class="course_sys">
                <div class="course_class_title hm-flex hm-center hm-scenter">
                    <img src="~assets/images/kecheng.png" width="43" height="43" alt="课程体系">
                    <h1>课程体系</h1>
                </div>
                <course-sys :courseSystem="articleList"></course-sys>
            </div>
            <div class="course_sys">
                <div class="course_class_title text-center">
                    <img src="~assets/images/teacher.png" width="43" height="33" alt="明星讲师">
                    <h1>明星讲师</h1>
                    <br>
                    <p>实用案例深度解析,专业讲师为你带来设计界前沿的视频课程。设计技巧全面传授,提供成长道路上并不可少的技能.</p>
                </div>
                <div class="swiper swiperBox" v-swiper:swiper="swiperOption" ref="swiperBox">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in teacherList" :style="{backgroundImage:'url(' + item.pic + ')'}" :key="index">
                            <div class="hm-flex hm-space hm-center m10">
                                <div class="teacher_slot">
                                    <nuxt-link :to="{ name: 'teacherPower'}">
                                        <div class="slot__mask">
                                            <p>{{item.name}}</p>
                                            <p>{{item.position}}</p>
                                        </div>
                                        <div class="slot_mask_show">
                                            <p>{{item.name}}{{item.detail}}</p>
                                        </div>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </div>

            </div>
        </div>
        <div class="studenty_style">
            <div class="style_title">
                <img src="~assets/images/stu.png" width="51" height="59" alt="">
                <h1 class="inline-block">学员风采</h1>
            </div>
            <div class="w1200">
                <el-row :gutter="20">
                    <el-col :span="8" v-for="item in studentList" :key="item.id">
                        <div class=" hm-flex hm-center stu_style_con">
                            <img :src="item.pic" width="111" height="111" alt="">
                            <div>
                                <p>
                                    <span class="stu_name">{{item.name}}</span>
                                    <span class="ellipsis" style="width:100px;display:inline-block;vertical-align: bottom;">{{item.className}}</span>
                                </p>
                                <p class="stu_intro_info">{{item.detail}}</p>
                            </div>
                        </div>

                    </el-col>
                </el-row>
            </div>
            <div class="style_title">
                <img src="~assets/images/friend.png" width="34" height="48" alt="">
                <h1 class="inline-block">合作伙伴</h1>
            </div>
            <el-row class="w1200">
                <el-col :span="4" v-for="item in contentList.partners" :key="item.id">
                    <a :href="item.url">
                        <img :src="item.path" width="170" height="60" alt="">
                    </a>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
    // import Carousel from "~/components/Carousel";
    import CourseSys from "~/components/CourseSys";
    import API from "~/api";
    export default {
        async asyncData({ params, error, store }) {
            try {
                let [list, contentList, studentList, teacherList] = await Promise.all([API.updateViewCount(), API.getContentList(), API.studentGlamour(), API.teacherGlamour()]);
                return {
                    articleList: list.data.data,
                    contentList: contentList.data.data,
                    studentList: studentList.data.data,
                    teacherList: teacherList.data.data
                };
            } catch (err) {
                console.log(err)
                //   const code = err.response.data.code
                //   const message = err.response.message
                //   error({ statusCode: code, message })
            }
        },
        fetch({ store }) {
            return store.dispatch('updateBanners')
        },
        components: {
            // Carousel,
            CourseSys
        },
        head() {
            return {};
        },
        name: "Index",
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
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
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
                    spaceBetween: 30,
                },
                category: [{
                        title: "入学流程",
                        intro: "入学基本流程查询",
                        img: require("~/assets/images/ruxue.png"),
                        id: 1,
                        name: 'signUp'
                    },
                    {
                        title: "合作模式",
                        intro: "三项合作专业模式",
                        img: require("~/assets/images/hezuo.png"),
                        id: 2,
                        name: 'aboutCollege'
                    },
                    {
                        title: "就业真相",
                        intro: "就业口碑好评如潮",
                        img: require("~/assets/images/jiuye.png"),
                        id: 3,
                        name: 'employmentSecurity'
                    },
                    {
                        title: "常见问题",
                        intro: "遇到问题点击查看",
                        img: require("~/assets/images/changjian.png"),
                        id: 4,
                        name: 'commentsArea'
                    }
                ]
            };
        },
        mounted() {

        },

    };
</script>

<style lang="scss" scoped>
    .container {
        min-height: 100vh;
    }

    .studenty_style {
        width: 100%;
        background: linear-gradient(to right, #07A7F2, #02D7FD);
        text-align: center;
        padding-bottom: 119px;

        .style_title {
            padding: 33px 0;
        }

        h1 {
            font-size: 38px;
            font-family: TTCHJT--GB1-0;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
        }

        .stu_style_con {
            border-radius: 60px 60px 0 60px;
            background: #fff;
            margin-bottom: 33px;

            img {
                width: 110px;
                height: 110px;
                border-radius: 50%;
                padding: 3px;
                background: #fff;
                margin-right: 10px;
            }

            p {
                text-align: left;
            }

            .stu_name {
                font-size: 16px;
                font-weight: 500;
            }

            .stu_intro_info {
                padding-top: 19px;
                width: 219px;
                height:57px;
                @include ellipsisMultiline(2);
            }
        }
    }

    .w1200 {
        /deep/ .el-card {
            border: none;
            border-radius: 0;
        }
    }

    .teacher_slot {
        width: 100%;
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

    .catalog_name {
        width: 88px;
        font-size: 22px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
    }

    .catalog_intro {
        width: 112px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        padding-top: 3px;
    }

    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }
</style>