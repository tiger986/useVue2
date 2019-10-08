<template>
  <div class="w1200 signUp">
    <h1>报名信息</h1>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="300px"
      class="demo-ruleForm"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="ruleForm.sex" placeholder="请选择性别">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="微信" prop="wx">
        <el-input v-model="ruleForm.wx"></el-input>
      </el-form-item>
      <el-form-item label="QQ" prop="qq">
        <el-input v-model="ruleForm.qq"></el-input>
      </el-form-item>
    </el-form>
    <p>招商银行：1109 0927 9110 221 户名：北京启创卓越科技有限公司</p>
    <p>开户行：招商银行北京分行万通中心支行</p>
    <p>汇款后可致电查询：400-618-4000</p>
    <p>课程介绍</p>
    <p>班 级： 50~100人/班</p>
    <p>课 时： 待定</p>
    <p>费 用: 详情咨询客服</p>
    <p>微 信: zuwannan</p>
    <p>（1） 所有学员最好是开班前三天至校区办理报道手续 （注：节假日除外）
      <br>（2）所到时须携带本人身份证原件并填写学籍卡、签订学员守则。
      <br>（3）需工作人员协助安排住宿的学员请在买好车票后告知咨询老师；以便于工作人员协助您安排住宿
      <br>并事先熟悉环境，为日后的学习做好准备工作。
      <br>
    </p>

    <p style="padding-top:100px;">温馨提示</p>
    <p>
      如果您无法参加当期的课程，我们将自动将您的名额转至下一期班级。如果您在缴纳报名费用后不打算
      参加学习了，请在开班前5个工作日通知我们，我们将全额退换您的报名费（如果您在外地，汇款的手
      续费用将从您的报名费中扣除）。
    </p>
    <div class="text-center">
      <el-button type="primary" @click="submitForm()">提交报名</el-button>
    </div>
    <div class="v-modal" v-if="shadow"></div>
    <div class="el-message-box__wrapper" v-if="shadow" style="z-index: 2036;">
      <div class="el-message-box">
        <div class="close">
          <img @click="close" src="~assets/images/close.png" alt>
        </div>
        <img src="~assets/images/tijiao.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
import API from "~/api";
import {
  validatePhone,
  validateUserName,
  validateEmail
} from "@/utils/validate";
export default {
  head() {
    return {
      title: "报名信息"
    };
  },
  name: "signUp",
  data() {
    let checkPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入手机号"));
      } else {
        if (validatePhone(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的手机号"));
        }
      }
    };
    let checkEmail = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入邮箱"));
      } else {
        if (validateEmail(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的邮箱"));
        }
      }
    };
    let checkUserName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入用户名"));
      } else {
        if (validateUserName(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的用户名"));
        }
      }
    };
    return {
      shadow: false,
      ruleForm: {
        name: "",
        sex: "",
        phone: "",
        email: "",
        wx: "",
        qq: ""
      },
      rules: {
        name: [
          {
            validator: checkUserName,
            required: true,
            trigger: "blur"
          },
          {
            min: 2,
            max: 8,
            message: "长度在 2到 8 个字符",
            trigger: "blur"
          }
        ],
        sex: [{ required: true, message: "性别必填", trigger: "change" }],
        phone: [
          {
            validator: checkPhone,
            trigger: "blur",
            required: true
          }
        ],
        email: [{ validator: checkEmail, required: true, trigger: "blur" }],
        wx: [
          { required: true, message: "微信必填", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6到 20 个字符",
            trigger: "blur"
          }
        ],
        qq: [
          { required: true, message: "QQ必填", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "长度在 6到 12 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          API.enroll({
            realName: this.ruleForm.name,
            sex: this.ruleForm.sex,
            phone: this.ruleForm.phone,
            email: this.ruleForm.email,
            weChatID: this.ruleForm.wx,
            qqID: this.ruleForm.qq
          })
            .then(res => {
              if (res.data.code == 0) {
                this.shadow = true;
              }
            })
            .catch(err => console.log(err));
        } else {
          return false;
        }
      });
    },
    close() {
      this.shadow = false;
      this.$router.push("/");
    }
  }
};
</script>

<style scoped lang="scss">
.el-message-box {
  width: 627px;
  height: 427px;
  text-align: center;
  position: relative;
  padding-top: 93px;
}
.v-modal {
  z-index: 200;
}
.close {
  position: absolute;
  top: 18px;
  right: 24px;
  cursor: pointer;
}

.signUp {
  background: #fff;

  h1 {
    text-align: center;
    font-size: 36px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    padding: 39px 0 80px;
  }

  p {
    padding-left: 260px;
    text-align: left;
    width: 830px;
    line-height: 25px;
  }

  /deep/ .el-button {
    margin: 20px auto;
    width: 232px;
    height: 62px;
    background: rgb(73, 146, 210);
    border-radius: 4px;
    font-size: 18px;
  }

  /deep/ .el-form-item {
    margin-bottom: 42px;
  }

  /deep/ .el-input {
    width: 574px;
  }
}
</style>