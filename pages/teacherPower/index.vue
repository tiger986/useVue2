<template>
    <div class="w1200 power">
        <div class="hm-flex" style="margin-bottom:20px;" v-for="(item, index) in teacherList" :key="index">
            <img :src="item.cover" width="262" height="360" alt="">
            <div class="power_right">
                <p>
                    <span class="power_name">{{item.name}}</span>
                    <span class="power_intro">{{item.position}}</span>
                </p>
                <div class="g-flex">
                    <div class="g-left">
                        简介 :
                    </div>
                    <div class="g-right">
                         {{item.intro}}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import API from "~/api";
    export default {
        async asyncData({ params, error, store }) {
            try {
                let [list] = await Promise.all([API.getFacultyList()]);
                return {
                    teacherList: list.data.data
                };
            } catch (err) {
                console.log(err);
                //   const code = err.response.data.data.status
                //   const message = err.response.data.message
                //   error({ statusCode: code, message })
            }
        },
        head() {
            return {
                title: '师资力量'
            };
        },
        name: "teacherPower",
        data() {
            return {
                
            };
        }
    };
</script>

<style scoped>
    .power {
        margin: 29px auto;
    }
   
    .power_name {
        font-size: 26px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
    }

    .power_intro {
        width: 144px;
        font-size: 18px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
    }

    .power_right {
        flex: 1;
        margin-left: 20px;
    }

    .w1200 {
        background: #fff;
        padding: 23px;
    }

    .g-flex {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: stretch;
        font-size: 16px;
        color: #333333;
        margin-top: 46px;
    }

    .g-flex .g-left {
        flex: 60px 0 0;
    }

    .g-flex .g-right {
        flex: 1;
    }
</style>