<template>
  <div id="app">
   <div class="main">
      <div class="wrap">
        <div class="content">
          <div class="box">
            <div class="box_con">
              <div class="box_con_pic"></div>
              <div class="box_con_right">
                <nuxt />
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loginAbout",
  components: {}
};
</script>
<style scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #ffffff;
}
.main {
  background-color: #ffffff;
  width: 100%;
}
.wrap {
  width: 100%;
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

.box{
  width: 100%;
  overflow: hidden;
}
.box_con{
  width: 1000px;
  height: 744px;
  margin: 50px auto 0;
}
.box_con_pic{
  width: 308px;
  height: 744px;
  float: left;
  background: url("../assets/img/login.png") no-repeat left top;
  background-size: 308px 744px;
}
.box_con_right{
  width: 691px;
  height: 724px;
  float: right;
}
</style>
