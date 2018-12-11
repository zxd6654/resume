<template>
    <div :class="partFive">
        <h3 class="text-center text-top">工作经验</h3>
        <p>
            <a href="javascript:void(0)">北京源著控股有限公司</a>
            <span class="text-small">| 2017/08 - 至今</span>
        </p>
        <p class="text-small">工作内容：日常操作 jQuery 编写活动页、原生js结合ES6编写，vue开发网站……</p>
        <p class="text-small">项目成就：</p>
        <p class="text-small">&emsp;1. 优主意家具商城，使用原生js，JQuery开发，已上线。</p>
        <p class="text-small">&emsp;2. 源著控股官网，使用larval框架结合原生js开发，已上线。</p>
        <p class="text-small">&emsp;3. jQuery 活动页及 H5 活动页。</p>
        <p class="text-small">&emsp;4. GSbuilder家具建模软件，使用ES6开发，正在进行中。</p>
    </div>
</template>

<script>
    export default {
        name: "partFive",
        data() {
            return {
                partFive: "part-five",
                curWidth: 0
            };
        },
        beforeMount() {
            this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
            if(this.curWidth < 1000) {
                this.partFive = "part-five-responsive"
            }
        }
    };
</script>

<style scoped>
    a {
        color: deepskyblue;
    }
    a:hover {
        color: rgb(118, 190, 248);
    }
    .part-five {
        width: 100%;
        height: 350px;
        border: 40px solid transparent;
        border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
        background: #18202d;
    }
    .part-five-responsive {
        width: 100%;
        border: 40px solid transparent;
        border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
        background: #18202d;
    }
    .text-center {
        text-align: center;
    }
    .text-small {
        font-size: 0.9em;
        color: rgb(253, 239, 239);
    }
</style>