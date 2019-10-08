import axios from '~/plugins/axios'

export default {
    //GET(服务端渲染)
    getGlobalInfomation(params) {
        return axios({
            url: `${process.env.baseUrl}/xx`,
            params
        })
    },

    //GET(客户端渲染)
    getPageDetails() {
        return axios({
            url: `/match/areaList`
        })
    },

    //首页 课程体系
    updateViewCount(data) {
        return axios({
            url: `${process.env.baseUrl}/website/api/index/courseSystem`,
            method: 'POST',
            data
        })
    },
    //首页 轮播图、合作伙伴、友情链接【1 轮播 2 合作伙伴 3 友情链接】
    getContentList(params) {
        return axios({
            url: `${process.env.baseUrl}/website/api/content/getContentList`,
            method:'GET',
            params
        })
    },
    //首页 学员风采
    studentGlamour(data) {
        return axios({
            url: `${process.env.baseUrl}/website/api/index/studentGlamour`,
            method: 'POST',
            data
        })
    },
    //首页 教师风采
    teacherGlamour(data) {
        return axios({
            url: `${process.env.baseUrl}/website/api/index/teacherGlamour`,
            method: 'POST',
            data
        })
    },
    //   社区列表
    questionList(data) {
        return axios({
            url: `${process.env.baseUrl}/website/api/question/list`,
            method: 'POST',
            data
        })
    },
    //学员风采--学生活动
    getStudentActive(data) {
        return axios({
            url: `${process.env.baseUrl}/website/api/index/getStudentActive`,
            method: 'POST',
            data
        })
    },
    //学员风采--学生感言
    getStudentGlamour(data) {
        return axios({
            url: `${process.env.baseUrl}/website/api/index/studentGlamour`,
            method: 'POST',
            data
        })
    },
    //就业保障--就业学员
    getJobStudent(data) {
        return axios({
            url: `${process.env.baseUrl}/website/api/index/getJobStudent`,
            method: 'POST',
            data
        })
    },
    //就业保障--就业薪资
    getJobTrainee(data) {
        return axios({
            url: `${process.env.baseUrl}/website/api/index/getJobTrainee`,
            method: 'POST',
            data
        })
    },
    //就业保障--招聘信息
    getRecruit(data) {
        return axios({
            url: `${process.env.baseUrl}/website/api/index/getRecruit`,
            method: 'POST',
            data
        })
    },
    //师资力量
    getFacultyList(params) {
        return axios({
            url: `${process.env.baseUrl}/website/api/content/getFacultyList`,
            method:'GET',
            params
        })
    },
    //互动社区 发布新帖
    publishNewMessage(data) {
        return axios({
            url: `${process.env.baseUrl}/website/api/content/publishNewMessage`,
            method: 'POST',
            data
        })
    },
    //报名
    enroll(data) {
        return axios({
            url: '/website/api/user/enroll',
            method: 'POST',
            data
        })
    },
    //回帖
    publishReplyMessage(data) {
        return axios({
            url: '/website/api/content/publishReplyMessage',
            method: 'POST',
            data
        })
    },
    //课程体系
    getSystemDetail(data) {
        return axios({
            url: '/website/api/index/systemDetail',
            method: 'POST',
            data
        })
    },
    //课程大纲
    getOutlinePic(data) {
        return axios({
            url: '/website/api/index/getOutlinePic',
            method: 'POST',
            data
        })
    },
    //登录
    login(data){
        return axios({
            url: '/website/api/user/login',
            method: 'POST',
            data
        })
    },
    //获取原创
    getBook(data){
        return axios({
            url: '/website/api/index/book',
            method: 'POST',
            data
        })
    },
    //获取手机验证码
    getCode(data){
        return axios({
            url: '/website/api/user/sendVerificationCode',
            method: 'POST',
            data
        })
    },
    //注册
    register(data){
        return axios({
            url: '/website/api/user/register',
            method: 'POST',
            data
        })
    },
    //忘记密码
    forgetPwd(data){
        return axios({
            url: '/website/api/user/forgetPwd',
            method: 'POST',
            data
        })
    },
    //曝光图
    getExposureImg(data){
        return axios({
            url: `${process.env.baseUrl}/website/api/index/getStudentInfo`,
            method: 'POST',
            data
        })
    }


}