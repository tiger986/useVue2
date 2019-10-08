<template>
    <div class="w1200 vote_area">
        <el-card shadow="always" :body-style="{ display: 'flex',padding:'33px 29px'}">
            <div>
                <h1>参与社区互动，掌握更多学习秘诀</h1>
                <div class="hm-flex">
                    <div class="catalog_name" v-for="(item, index) in data" :key="index" :class="{active:(index ==typeStatus-1)}" @click="changeList(index)">{{item.name}}</div>
                </div>
            </div>
            <div class="vote_header">
                <el-button type="primary" class="publish_btn" @click="publish(1)">发布新帖</el-button>
            </div>
        </el-card>
        <no-ssr>
            <el-card shadow="always" :body-style="{ padding:'28px 30px 28px 19px'}" style="margin-top:10px" v-for="(item, index) in commentsList" :key="index">
                <div class="comment_con hm-flex hm-space">
                    <div class="comment_con_note">
                        <img class="comments_avatar" :src="item.pic" alt>
                        <span>{{item.name}}</span>
                        <img src="~assets/images/top.png" v-if="item.top==1" class="img_header_status" alt>
                        <img src="~assets/images/jinghua.png" v-if="item.elite==1" class="img_header_status" alt="">
                    </div>
                    <div class="comment_con_main">
                        <p>{{item.question}}</p>
                        <div class="main_answer" v-for="(el, index) in item.reply" :key="index">
                            <img :src="el.pic" alt>
                            <span class="main_answer_name">{{el.name}}</span> :
                            <span class="main_answer_self">{{el.content}}</span>
                        </div>
                    </div>
                    <div class="hm-flex  hm-space coments_design">
                        <el-button type="primary" class="receive_btn" @click="publish(2,item.id)">回帖</el-button>
                        <time style="color:#999">{{item.created_at}}</time>
                    </div>
                </div>
            </el-card>
        </no-ssr>

        <!-- 编辑弹出框 -->
        <el-dialog :visible.sync="editVisible" width="30%" >
            <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="80px">
                <el-form-item prop="content">
                    <el-input v-model="ruleForm.content" maxlength="30">
                        <div slot="suffix">{{ruleForm.content.length}}/30</div>
                    </el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="updateData()">发 布</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import API from "~/api";
    export default {
        head() {
            return {
                title: "互动社区"
            };
        },
        name: "commentsArea",
        data() {
            return {
                data: [{
                        name: "全部"
                    },
                    {
                        name: "精华"
                    },
                    {
                        name: "最新"
                    }
                ],
                ruleForm: {
                    content: ''
                },
                rules: {
                    content: [
                        { required: true, message: "必填", trigger: "blur" }
                    ]
                },
                type: 1,
                receiveId: '',
                editVisible: false,
                commentsList: [],
                typeStatus: 1,
            };
        },
        mounted() {
            this.getData()
        },
        methods: {
            changeList(index) {
                this.typeStatus = index + 1
                this.getData()
            },
            getData() {
                API.questionList({ type: this.typeStatus }).then((res) => {
                    this.commentsList = Object.freeze(res.data.data)
                })
            },
            publish(type, receiveId) {
                let userId = localStorage.getItem("qcxy_userId")
                if (!userId) {
                    this.$router.push({
                        name: 'login',
                        query: {
                            href: this.$route.fullPath
                        }
                    })
                    return
                }
                this.type = type
                this.receiveId = receiveId
                this.editVisible = true;
                this.ruleForm.content = ''
            },
            updateData() {
                this.editVisible = true;
                if(this.ruleForm.content==='') return
                if (this.type == 1) {

                    API.publishNewMessage({ userId: localStorage.getItem("qcxy_userId"), question: this.ruleForm.content }).then((res) => {
                        this.getData()
                        this.ruleForm.content = ''
                        this.$message({
                            message: '发帖成功',
                            type: 'success'
                        })
                        this.editVisible = false;
                    }).catch((err) => {
                        this.$message({
                            message: err.response.data.message,
                            type: 'error'
                        })
                        this.ruleForm.content = ''
                    })
                } else {
                    API.publishReplyMessage({ userId: localStorage.getItem("qcxy_userId"), questionId: this.receiveId, content: this.ruleForm.content }).then((res) => {
                        this.getData()
                        this.ruleForm.content = ''
                        this.$message({
                            message: '提交评论成功',
                            type: 'success'
                        })
                        this.editVisible = false;
                    }).catch((err) => {
                        this.$message({
                            message: err.response.data.message,
                            type: 'error'
                        })
                        this.ruleForm.content = ''
                    })
                }

            }
        }
    };
</script>

<style lang="scss" scoped>
    .active {
        color: #4992d2 !important;
        font-weight: 600;
    }

    .vote_area {
        margin: 10px auto;

        & /deep/ .el-form-item__content {
            margin-left: 0 !important;

            & /deep/ .el-input__inner {
                padding-right: 45px !important;
                height: 80px;
                // line-height: 60px;
            }

            & /deep/ .el-input__suffix {
                top: 47px;

            }
        }

        h1 {
            font-size: 24px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            padding-bottom: 60px;
        }

        .catalog_name {
            padding: 0 60px;
            font-size: 16px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            padding-right: 65px;
            border-right: 1px solid #ccc;
            cursor: pointer;

            &:nth-of-type(1) {
                padding-left: 0;
            }

            &:nth-of-type(3) {
                border-right: none;
            }
        }

        .vote_header {
            flex: 1;
            display: flex;
            align-self: flex-end;
            justify-content: flex-end;

            /deep/ .el-button {
                width: 128px;
                height: 40px;
                background: rgb(199, 111, 132);
                border-radius: 7px;
                border: none;
            }
        }

        .comment_con {
            .comment_con_note {
                width: 100px;
                text-align: center;
                position: relative;

                .comments_avatar {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                }

                span {
                    width: 62px;
                    height: 17px;
                    font-size: 16px;
                    font-family: MicrosoftYaHei;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                    line-height: 14px;
                    text-align: center;
                    @extend %ellipsis;
                }

                .img_header_status {
                    width: 61px;
                    height: 36px;
                    position: absolute;
                    right: -45px;
                    top: -10px;
                }
            }

            .comment_con_main {
                flex: 1;
                margin-left: 65px;

                p {
                    width: 500px;
                    font-size: 18px;
                    font-family: MicrosoftYaHei;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                    @extend %ellipsis;
                }

                .main_answer {
                    margin-top: 10px;

                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                    }

                    .main_answer_name {
                        width: 50px;
                        font-size: 16px;
                        font-family: MicrosoftYaHei;
                        font-weight: 400;
                        color: rgba(102, 102, 102, 1);
                        @extend %ellipsis;
                    }

                    .main_answer_self {
                        width: 545px;
                        // height: 17px;
                        font-size: 16px;
                        font-family: MicrosoftYaHei;
                        font-weight: 400;
                        color: rgba(102, 102, 102, 1);
                        line-height: 24px;
                        // display: inline-block;
                        @extend %ellipsis;
                    }
                }


            }

            .coments_design {
                flex: 280px 0 0;

                /deep/ .el-button {
                    width: 110px;
                    height: 40px;
                    background: #4992d2;
                    font-size: 16px;
                }
            }
        }
    }
</style>