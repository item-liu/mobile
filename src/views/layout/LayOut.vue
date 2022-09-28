<template>
    <div>

        <!-- 主体内容 -->
        <router-view></router-view>
        <!-- 底部tabbar -->
        <Tabbar></Tabbar>

    </div>
</template>
<script lang="ts" setup>
    import Tabbar from '@/components/tabbar/TabBar.vue'
</script>