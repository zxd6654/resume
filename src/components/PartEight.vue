<template>
    <div class="part-eight" id="part-eight"></div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');

    require('echarts-gl');

    export default {
        name: 'PartEight',
        data() {
            return {};
        },
        mounted() {
            this.drawECharts();
        },
        methods: {
            drawECharts() {
                function createNodes(widthCount, heightCount) {
                    let nodes = [];
                    for (let i = 0; i < widthCount; i++) {
                        for (let j = 0; j < heightCount; j++) {
                            nodes.push({
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                value: 1
                            });
                        }
                    }
                    return nodes;
                }

                function createEdges(widthCount, heightCount) {
                    let edges = [];
                    for (let i = 0; i < widthCount; i++) {
                        for (let j = 0; j < heightCount; j++) {
                            if (i < widthCount - 1) {
                                edges.push({
                                    source: i + j * widthCount,
                                    target: i + 1 + j * widthCount,
                                    value: 1
                                });
                            }
                            if (j < heightCount - 1) {
                                edges.push({
                                    source: i + j * widthCount,
                                    target: i + (j + 1) * widthCount,
                                    value: 1
                                });
                            }
                        }
                    }
                    return edges;
                }

                let nodes = createNodes(50, 50);
                let edges = createEdges(50, 50);

                let myChart = echarts.init(document.getElementById('part-eight'));
                let option = {
                    series: [{
                        type: 'graphGL',
                        nodes: nodes,
                        edges: edges,
                        itemStyle: {
                            color: 'rgba(255,255,255,0.8)'
                        },
                        lineStyle: {
                            color: 'rgba(255,255,255,0.8)',
                            width: 3
                        },
                        forceAtlas2: {
                            steps: 5,
                            jitterTolerence: 10,
                            edgeWeightInfluence: 4
                        }
                    }]
                };

                myChart.setOption(option);
            }
        }
    }
</script>

<style scoped>
    .part-eight {
        width: 100%;
        height: 500px;
        border: 40px solid transparent;
        border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
        background: #18202d;
    }
</style>
