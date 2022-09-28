<template>
  <div class="home">
    <!-- 使用vant框架中的组件 -->
    <!-- <van-button type="success">成功按钮</van-button> -->

    <!-- 轮播图 -->
    <div class="nav">
      <div class="pic">
        <img src="../../public/images/img_02.png" alt="" />
      </div>
    </div>
    <!-- <TabBar></TabBar> -->
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { home_http } from '@/api/httpHome'

// import TabBar from "@/components/tabbar/TabBar.vue"

// home_http().then((res: any)=>console.log(res))
// 封装业务函数
async function gethome(){
  let {data} = await home_http()
  console.log(data);
}
gethome()
















// export default defineComponent({
//   name: "HomeView",
//   components: {
//     TabBar,
//   },
// });
</script>
<style lang="scss" scoped>
.home {
  .nav {
    .pic {
      width: 375px;
      height: 296px;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
</style>
