<template>
  <div class="curriculumSystem">
    <img :src="pic" alt="" />
    <div style="height:80px;background-color:#ffffff"></div>
  </div>
</template>

<script>
import API from '~/api'
export default {
  async asyncData ({ params, error, store }) {
    try {
      
      return {
        
      }
    } catch (err) {
        console.log(err) 
    }
  },
  head () {
    return {
      title: "课程体系"
    }
  },
  name: 'curriculumSystem',
  data() {
    return {
      pic: ""
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      //console.log(this.$route);
      API.getSystemDetail({id: this.$route.params.id}).then((res) => {
          this.pic = res.data.data.systemPic;
          //console.log(this.pic)
      })
    },
  }
 
}
</script>

<style scoped>
  .curriculumSystem{
    width: 100%;
    min-height: 500px;
    overflow: hidden;
  }
  .curriculumSystem img{
    display: block;
    width: 100%;
  }

</style>
