<template>
    <el-carousel indicator-position="none" :loop="true" :interval="4000" :autoplay="autoplay" :height="heights + 'px'">
        <el-carousel-item v-for="item in carouselData" :key="item.id">
            <slot name="banner" :studentData="item"></slot>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: 'Carousel',
        data() {
            return {

            }
        },
        props: {
            heights: {
                type:Number || String
            },
            carouselData: {
                type: Array || Object,
                require:false
            },
            autoplay: {
                type: Boolean,
                default: true,
                require: false
            }
        }
    }
</script>

<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>