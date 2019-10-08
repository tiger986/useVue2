<template>
    <header class="header">
        <div class="header-content">
            <div class="top_header hm-flex hm-space">
                <div class="heart_tip">
                    <span class="hot-call">全国服务热线 010-56271456</span>
                    <!-- <svg-icon iconName="#icon-qq" class="vertical-middle"></svg-icon>
                    <span class="vertical-middle">在线客服</span>
                    <svg-icon iconName="#icon-weibo" class="vertical-middle"></svg-icon>
                    <span class="vertical-middle">企业微博</span> -->
                    <svg-icon iconName="#icon-weixin" class="vertical-middle"></svg-icon>
                    <span class="vertical-middle">关注微信</span>
                    <img src="~assets/images/erweima.jpg" class="show_erweima" alt="">
                    <span class="welcome">您好，欢迎您来到启创学院平台！</span>
                </div>
                <div v-if="!user">
                    <nuxt-link :to="href!='/'?{name: 'login', query: {href: href}} : {name: 'login'}" class="login c-black">登录</nuxt-link>
                    <nuxt-link :to="href!='/'?{name: 'register', query: {href: href}} : {name: 'register'}" class="c-black">注册</nuxt-link>
                </div>
                <div style="color:#333333" v-if="user">
                    <span>{{nickname}}</span>
                    <span class="logOut" @click="doLogOut()">退出登录</span>
                </div>
            </div>
            <div class="con_headerBox">
                <div class="con_header">
                    <div class="con_header_box">
                        <div class="con_header_t hm-flex hm-center hm-space">
                            <h1>
                                <span class="hide">启创学院</span>
                                <no-ssr>
                                    <nuxt-link :to="{ name: 'index' }" class="block">
                                        <img src="~assets/images/logo.png" class="vertical-middle logo" width="130" height="40" alt="">
                                    </nuxt-link>
                                </no-ssr>
                            </h1>
                            <!-- <div class="search-box" v-if="showAll">
                                <el-input v-model="searchText" placeholder="输入你想搜索的课程">
                                    <el-button slot="append" icon="el-icon-search"></el-button>
                                </el-input>
                            </div> -->
                            <img src="~assets/images/bg.png" width="400" height="97" alt="">
                        </div>
                    </div>
                    <div class="nav-wrap" :class="{'nav-wrap-position':!showAll}">
                        <no-ssr>
                            <ul class="hm-flex">
                                <li class="nav-list first" v-if="showAll">
                                    <nuxt-link :to="{ name: 'index' }">
                                        精品课程
                                    </nuxt-link>
                                    <div class="nav-list-item hm-flex">
                                        <div class="hover_change" v-for="item in navlistItem" :key="item.id">
                                            <div class="nav-list_item_repeat hm-flex hm-center hm-space">
                                                <div>
                                                    <p class="nav_two_p">{{item.courseTitle}}</p>
                                                    <p class="nav_two_p">{{item.courseIntro}}</p>
                                                </div>
                                                <img src="~assets/images/fanhui.png" width="7" height="15" class="icon-arrow" alt="">
                                            </div>
                                            <div class="sub-nav-wrap">
                                                <ul class="list-view-wrap">
                                                    <li class="sub-nav-list" v-for="el in child" :key="el.id">
                                                        <nuxt-link v-if="el.params" :to="{ name: el.name,params: { id: item.id }}" class="block">
                                                            <img :src="el.img" alt="">
                                                            <span>{{el.title}}</span>
                                                        </nuxt-link>
                                                        <nuxt-link v-else :to="{ name: el.name}" class="block">
                                                            <img :src="el.img" alt="">
                                                            <span>{{el.title}}</span>
                                                        </nuxt-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-list" v-for="item in navData" :key="item.id">
                                    <nuxt-link :to="{ name: item.name}" class="nav-list-hover">
                                        {{ item.text }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </no-ssr>
                    </div>
                </div>
            </div>

        </div>
    </header>
</template>
<script>
    import API from "~/api";
    export default {
        name: 'AppHeader',
        data() {
            return {
                searchText: '',
                navData: [{
                        text: '关于学院',
                        id: 1,
                        name: "aboutCollege"
                    },

                    {
                        text: '师资力量',
                        id: 3,
                        name: 'teacherPower'
                    },
                    {
                        text: '就业保障',
                        id: 4,
                        name: "employmentSecurity"
                    },
                    {
                        text: '报名信息',
                        id: 5,
                        name: 'signUp'
                    },
                    {
                        text: '学员风采',
                        id: 6,
                        name: "cadetStyle"
                    },
                    {
                        text: '原创书籍',
                        id: 8,
                        name: 'originalBook'
                    },
                    {
                        text: '互动社区',
                        id: 7,
                        name: 'commentsArea'
                    }
                ],
                navlistItem: [{
                        title: 'Java培训课程',
                        intro: '技术雄厚实力更强',
                        id: 11,
                    },
                    {
                        title: '大数据培训课程',
                        intro: '大牛引路实战贯穿',
                        id: 12

                    },
                    {
                        title: '人工智能培训课程',
                        intro: '大牛引路实战贯穿',
                        id: 13

                    },
                    {
                        title: '云计算培训课程',
                        intro: '人工智能势不可挡',
                        id: 14
                    }
                ],
                child: [
                    { title: '课程大纲', img: require('~/assets/images/dagang.png'), name: 'syllabus-id', params: 1 },
                    { title: '师资力量', img: require('~/assets/images/shizi.png'), name: 'teacherPower' },
                    { title: '就业薪资', img: require('~/assets/images/xinzi.png'), name: 'employmentWage' }
                ],
                showAll: true,
                href: "",
                user: "",
                nickname: ""
            }
        },
        props: {
            // showAll: {
            //     type: Boolean,
            //     default: false,
            //     require: true
            // }
        },
        watch: {
            $route: {
                handler: function(val, oldVal) {
                    if (val.name == "index") {
                        this.showAll = true;
                    } else {
                        this.showAll = false;
                    }
                    //console.log(val);
                    //console.log(oldVal);
                    this.href = this.$route.fullPath;
                },
                // 深度观察监听
                deep: true
            }
        },
        created() {
            this.href = this.$route.fullPath;
            //console.log(this.href)
            if (this.$route.name == "index") {
                this.showAll = true;
            } else {
                this.showAll = false;
            }
        },
        mounted() {
            this.user = localStorage.getItem("qcxy_userId");
            API.updateViewCount().then((res) => {
                this.navlistItem = res.data.data
            })
            this.nickname = localStorage.getItem("qcxy_nickname");
        },
        methods: {
            doLogOut() {
                localStorage.removeItem("qcxy_userId");
                localStorage.removeItem("qcxy_token");
                localStorage.removeItem("qcxy_nickname");
                this.user = "";
            }
        }
    }
</script>
<style lang="scss" scoped>
    $headerHeight: 60px;

    .header {
        position: relative;
        width: 100%;
        background: $color-white;
    }

    .header-content {
        // position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        background: rgb(245, 245, 245);
    }

    .top_header {
        width: 1200px;
        margin: 0 auto;
        line-height: 40px;
    }

    .hot-call {
        padding-right: 60px;
    }

    .welcome {
        padding-left: 60px;
    }

    .logo {
        width: 224px;
        height: 71px;
    }

    .con_headerBox {
        width: 100%;
        height: 100%;
        background: #fff;
    }

    .con_header {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
        position: relative;

        .con_header_box {
            width: 1200px;
            margin: 0 auto;
            padding: 19px 0 11px;

        }
    }

    .search-box {
        width: 397px;
        height: 47px;
        border-radius: 24px;

        /deep/ .el-input__inner {
            border-top-left-radius: 24px;
            border-bottom-left-radius: 24px;
            background: rgb(245, 245, 245);
            border-right: none;

        }

        /deep/ .el-input__inner:focus {
            border-color: #cccccc;
        }

        /deep/ .el-input-group__append {
            border-top-right-radius: 24px;
            border-bottom-right-radius: 24px;
            background: rgb(245, 245, 245);

        }
    }

    .login {
        position: relative;
        padding-right: 10px;

        &::after {
            content: "";
            position: absolute;
            width: 1px;
            height: 12px;
            top: 4px;
            left: 35px;
            background: #C7C7C7;
        }
    }

    // 导航
    .nav-wrap {
        width: 1200px;
        margin: 0 auto;
    }

    .nav-wrap-position {
        position: absolute;
        top: 56px;
        left: 305px;
    }

    // 一级菜单
    .nav-list {
        display: flex;
        align-items: center;
        position: relative;
        height: 40px;
        margin-right: 80px;

        >a {
            color: $color-black;
            font-weight: 600;
        }

        &:last-of-type {
            margin-right: 0;
        }

        &.first {
            display: grid;
            width: 231px;
            height: 41px;
            text-align: center;
            font-size: 18px;
            background: rgba(14, 144, 222, 1);
            border-radius: 8px 8px 0px 0px;
            margin-right: 27px;
            position: relative;
            z-index: 3;

            >a {
                color: rgba(255, 255, 255, 1);
            }
        }

        .nuxt-link-exact-active {
            color: $color-theme;
        }
    }

    .nav-list-hover:hover {
        color: #209eea;
    }

    .nav-list .nav-list-active {
        color: #209eea;
    }

    .nav-list-item {
        width: 231px;
        position: absolute;
        top: 40px;
        flex-direction: column;

        .nav-list_item_repeat {
            height: 122.5px;
            background: #05030F;
            padding: 36px 29px 41px 19px;

            .nav_two_p {
                text-align: left;
                color: #fff;

                &:nth-of-type(1) {
                    font-size: $font-size-large;
                    font-weight: 600;
                    padding-bottom: 5px;
                }

                &:nth-of-type(2) {
                    font-size: $font-size-small;
                }
            }

        }
    }

    .hover_change {
        position: relative;
    }

    .hover_change:hover .sub-nav-wrap {
        display: block;
    }

    .hover_change:hover .nav-list_item_repeat {
        background: rgba(4, 6, 24, 0.6);
    }

    // 二级菜单
    .sub-nav-wrap {
        display: none;
        position: absolute;
        z-index: 99;
        top: 0px;
        right: -67.5%;
        width: 156px;

        .list-view-wrap {
            overflow: hidden;
            background: rgba(4, 6, 24, 0.6);

        }
    }

    .sub-nav-list {
        a {
            display: block;
            padding: 30px;
            transition: 0s;
        }

        img {
            width: auto;
            height: auto;
            display: block;
            margin: 0 auto;
            padding-bottom: 10px;

        }

        &:hover {
            background: $color-theme;
            transition: all .3s linear;

            a {
                color: $color-white;
            }
        }

        span {
            color: #fff;
        }
    }

    .heart_tip {
        position: relative;

        &:hover .show_erweima {
            display: block;
        }
    }

    .show_erweima {
        position: fixed;
        display: none;
        left: 430px;
        width: 120px;
    }
    .logOut{
        margin-left: 12px;
        cursor: pointer;
    }
    .logOut:hover{
        color: #209eea;
    }
</style>