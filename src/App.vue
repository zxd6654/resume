<template>
    <div class="app" id="app">
        <!-- 第一行 -->
        <el-row>
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="part">
                <router-view name="PartOne"/>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="part">
                <router-view name="PartTwo"/>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="part">
                <router-view name="PartThree"/>
            </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part">
                <router-view name="PartFour"/>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part">
                <router-view name="PartFive"/>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="part">
                <router-view name="PartSix"/>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="part">
                <router-view name="PartSeven"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>

</style>
