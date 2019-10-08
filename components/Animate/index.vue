<template>
    <div id="box">
        <ul id="con1" ref="con1" :class="{anim:animate==true}">
            <li v-for='item in items' :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'AnimateSlide',
        data() {
            return {
                animate: false,

                timer: null
            }
        },
        props: ["items"],
        mounted() {
            this.setInterAuto()
        },
        methods: {
            setInterAuto() {
                this.timer = setInterval(this.scroll, 2000)
            },
            scroll() {
                this.animate = true; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
                setTimeout(() => {
                    this.items.push(this.items[0]);
                    this.items.shift();
                    this.animate = false;
                }, 500)
            }
        },
        beforeDestroy() {
            this.timer = null
            window.clearInterval()
            window.clearTimeout()
        },
    }
</script>

<style>
    #box {
        width: 300px;
        height: 52px;
        overflow: hidden;
    }

    .anim {
        transition: all 0.5s;
        margin-top: -30px;
    }

    #con1 li {
        list-style: none;
        line-height: 30px;
        height: 30px;
    }
</style>