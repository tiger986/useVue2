<template>
    <div class="w1200 power">
        <span class="catalog_ces">分类</span>
        <el-tabs v-model="activeName" @tab-click="handleClick">

            <el-tab-pane :lazy="true" v-for="(item, index) in data" :key="index" :name="item.name" :label="item.name">
                <template v-if="activeName == item.name">
                    <el-row :gutter="40">
                        <el-col :span="12" style="margin-bottom:31px;" v-for="(item, index) in articleList" :key="index">
                            <el-card shadow="hover" :body-style="{ display: 'flex',padding:'40px'}">
                                <img :src="item.cover" width="209" height="298" class="image">
                                <div class="book_card hm-flex">
                                    <div>
                                        <h2>{{item.title}}</h2>
                                        <p>{{item.company}}</p>
                                        <p>{{item.number}}</p>
                                        <p>{{item.author}}</p>
                                    </div>
                                    <div class="hm-flex hm-space " style="align-items:flex-end;flex:1">
                                        <span>教学制定教材</span>
                                        <!-- <nuxt-link :to="{ name: 'index' }">
                                            <el-button type="primary">立即咨询</el-button>
                                        </nuxt-link> -->
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </template>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import API from "~/api";
    export default {
        // async asyncData({ params, error, store }) {
        //     try {
        //         let [list] = await Promise.all([API.getBook({type:1})]);
        //         console.log(list.data.data)
        //         return {
        //             articleList: list.data.data
        //         };
        //     } catch (err) {
        //         console.log(err);
        //         //   const code = err.response.data.data.status
        //         //   const message = err.response.data.message
        //         //   error({ statusCode: code, message })
        //     }
        // },
        head() {
            return {
                title: '原创书籍'
            };
        },
        name: "originalBook",
        data() {
            return {
                activeName: 'java',
                isDisable: false,
                data: [{
                        name: 'java'
                    },
                    {
                        name: '大数据'
                    },
                    {
                        name: '人工智能'
                    },
                    {
                        name: '云计算'
                    },
                ],
                articleList: []
            };
        },
        methods: {
            async handleClick(tab) {
                this.articleList = []
                this.getData(+tab.index + 1)
            },
            getData(index) {
                API.getBook({ type: index }).then(res => {
                    this.articleList = Object.freeze(res.data.data)
                });
            }
        },
        mounted() {
            this.getData(1)
        },
    };
</script>

<style lang="scss" scoped>
    .power {
        margin: 29px auto;
        position: relative;

        /deep/ .el-tabs__nav-wrap::after {
            height: 0;
        }

        .catalog_ces {
            position: absolute;
            left: 334px;
            top: 8px;
            font-size:14px;
        }

        /deep/ .el-tabs__item.is-active {
            color: #fff;
            background: #0094CC;
            border-radius: 27px;
        }

        /deep/ .el-tabs__item {
            line-height: 34px;
            height: 34px;
            margin-right: 20px;
        }

        /deep/ .el-tabs__active-bar {
            height: 0;
        }

        /deep/ .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
            padding-left: 20px;
        }

        /deep/ .el-tabs__item.is-top:last-child {
            padding-right: 20px;
        }

        /deep/ .el-tabs__header {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .image {
        margin-right: 24px;
    }

    .book_card {
        padding: 13px 0;
        flex: 1;
        flex-direction: column;

        h2 {
            font-size: 20px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
        }

        p:nth-of-type(1),
        p:nth-of-type(3) {
            font-size: 14px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
        }

        span {
            padding-bottom: 10px;
        }

        p:nth-of-type(2) {
            font-size: 16px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            padding-bottom: 19px;
        }

        /deep/ .el-button--primary {
            background: rgba(0, 148, 204, 1);
        }

    }
</style>