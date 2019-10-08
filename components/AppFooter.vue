<template>
    <footer class="footer">
        <div class="wrap">
            <div class="left inline-block">
                <p style="padding-bottom:43px">
                    <span>合作伙伴</span>
                    <span> | </span>
                    <span>联系我们：010-56271456</span>
                </p>
                <p>粤B2-20090191-26 | 京ICP备12020869号-2 | 京公网安备44010602000207 <br>
                    ©2014-2018 icourse163.org
                </p>
            </div>
            <div class="right inline-block">
                <img src="~assets/images/erweima.jpg" class="block" alt="">
                <span> 扫描二维码关注</span> <br>
                <span> “启创学院”官方公众号</span>
            </div>
        </div>
        <div class="fix_aside hm-flex">
            <!-- <div>
                <img src="~assets/images/zixun.png" alt="">
                <p>在线咨询</p>
            </div> -->
            <nuxt-link to="/signUp"></nuxt-link>
        </div>
        <div class="back-top" ref="backTop" @click="backTop" :class="{ show: isShowBackTop }"></div>
    </footer>
</template>
<script>
    export default {
        name: 'AppFooter',
        data() {
            return {
                isShowBackTop: false,
                _fn: () => {}
            }
        },
        created() {
            this._fn = this.fnThrottle(this.handerScroll, 300, 1000)
        },
        mounted() {
            window.addEventListener('scroll', this._fn)
        },
        methods: {
            backTop() {
                window.scrollTo(0, 0)
            },
            fnThrottle(fn, delay, atleast) {
                let timer = null
                let previous = null
                return function() {
                    let now = +new Date()
                    if (!previous) previous = now
                    if (atleast && now - previous > atleast) {
                        fn()
                        previous = now
                        clearTimeout(timer)
                    } else {
                        clearTimeout(timer)
                        timer = setTimeout(function() {
                            fn()
                            previous = null
                        }, delay)
                    }
                }
            },
            handerScroll() {
                this.scrollY = document.body.scrollTop || document.documentElement.scrollTop
                this.scrollY > 300 ? this.isShowBackTop = true : this.isShowBackTop = false
            }
        },
    }
</script>
<style>
    .icon-right-center {
        width: 140px !important;
    }
</style>
<style lang="scss" scoped>
    .footer {
        background: rgb(73, 146, 210);
        width: 100%;
        height: 264px;
        text-align: center;
        flex: 0 0 auto;
        color: #fff;
    }

    .wrap {
        position: relative;
    }

    .left {
        padding-top: 55px;
    }

    .right {
        padding-top: 20px;
        position: absolute;
        right: 39px;

        img {
            // width: 151px;
            height: 120px;
            margin-left: 15px;
        }
    }

    .fix_aside {
        position: fixed;
        z-index: 99;
        right: 0;
        top: 50%;
        width: 140px;
        height: 50px;
        margin-top: 47px;
        flex-direction: column;

        a {
            background: #fff url("~assets/images/go-sign.png") no-repeat;
            width: 140px;
            height: 50px;
            border-radius: 7px;
        }
    }

    .back-top {
        position: fixed;
        z-index: 99;
        right: 0;
        top: 50%;
        transition: .5s;
        width: 140px;
        height: 50px;
        margin-top: 115px;
        line-height: 133px;
        transform: translateX(140px);
        cursor: pointer;
        color: #666666;
        border-radius: 7px;

        background: #fff url("~assets/images/go-back.png") no-repeat;

        &.show {
            transform: translateX(0px);
        }

        .iconfont {
            font-size: 40px;
            color: $color-theme;
        }
    }
</style>