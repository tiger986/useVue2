<template>
    <div id="app">
        <app-header :showAll="true" />
        <div class="main">
            <carousel :heights="490" v-if="lunbo" :carouselData="carouselData">
                <div slot="banner" slot-scope="props">
                    <img width="100%;" :src="props.studentData.path" alt="">
                </div>
            </carousel>
            <nuxt />
        </div>
        <app-footer />
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import AppHeader from '~/components/AppHeader'
    import AppFooter from '~/components/AppFooter'
    import Carousel from "~/components/Carousel";

    export default {
        name: 'App',
        components: {
            AppHeader,
            AppFooter,
            Carousel
        },
        data() {
            return {
                lunbo: true,
            }
        },
        watch: {
            $route: {
                handler: function(val, oldVal) {
                    console.log(val)
                    if (val.name == "aboutCollege" || val.name == "curriculumSystem-id" || val.name == "commentsArea") {
                        this.lunbo = false;
                    } else {
                        this.lunbo = true;
                    }
                },
                // 深度观察监听
                deep: true
            }
        },
        computed: {
            ...mapState({
                carouselData: state => state.banners
            })
        },
        created() {
            if (this.$route.name == "aboutCollege" || this.$route.name == "curriculumSystem-id" || this.$route.name == 'commentsArea') {
                this.lunbo = false;
            } else {
                this.lunbo = true;
            }
        },
        mounted() {
            this.$store.dispatch('updateBanners')
        },
    }
</script>
<style>
    html {
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    #app {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .main {
        width: 100%;
        flex: 1 0 auto;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }

    .button--green {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #3b8070;
        color: #3b8070;
        text-decoration: none;
        padding: 10px 30px;
    }

    .button--green:hover {
        color: #fff;
        background-color: #3b8070;
    }

    .button--grey {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #35495e;
        color: #35495e;
        text-decoration: none;
        padding: 10px 30px;
        margin-left: 15px;
    }

    .button--grey:hover {
        color: #fff;
        background-color: #35495e;
    }
    .el-carousel__item{
        background: #fff!important;
    }
</style>