<template>
    <div class="part-four" id="part-four"></div>
</template>

<script>
    // 引入基本模板
    let echarts = require("echarts/lib/echarts");

    export default {
        name: "partFour",
        data() {
            return {};
        },
        mounted() {
            this.drawECharts();
        },
        methods: {
            drawECharts() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById("part-four"));

                myChart.setOption({
                    // 标题
                    title: {
                        // 标题文本
                        text: "每日的技术网站活动次数",
                        // 标题文本样式
                        textStyle: {
                            color: "#fff"
                        },
                        // 标题位置
                        x: "center"
                    },
                    // 图形布局
                    grid: {
                        // 距离底部高度
                        bottom: "20"
                    },
                    // 横轴
                    xAxis: {
                        show: false,
                        type: "category",
                        data: ["Github：\n30", "掘金：\n20", "简书：\n15","CSDN：\n20","牛人博客：\n15"],
                        axisLine: {
                            lineStyle: {
                                color: "#fff"
                            }
                        },
                        axisLabel: {
                            // 横轴信息全部显示
                            interval: 0
                        }
                    },
                    // 纵轴
                    yAxis: {
                        type: "value",
                        axisLine: {
                            lineStyle: {
                                color: "#fff"
                            }
                        },
                        axisLabel: {
                            // 横轴信息全部显示
                            interval: 0
                        }
                    },
                    // 图形系列
                    series: [
                        {
                            // 图类型
                            type: "bar",
                            // 数据
                            data: [30,20,15,20,15],
                            // 文本
                            label: {
                                show: true,
                                position: "top",
                                color: "#fff",
                                formatter: "{b}"
                            },
                            // 柱条样式
                            itemStyle: {
                                color: "deepskyblue"
                            },
                            zlevel: 1
                        }
                    ]
                });
            }
        }
    };
</script>

<style scoped>
    .part-four {
        width: 100%;
        height: 500px;
        border: 40px solid transparent;
        border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
        background: #18202d;
    }
</style>