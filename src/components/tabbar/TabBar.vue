<template>
  <div>
    <!-- 底部tab切换栏 -->
    <van-tabbar v-model="active" @change="onchangefn" route>
      <van-tabbar-item badge="3" icon="home-o" to="/"> 首页 </van-tabbar-item>
      <van-tabbar-item icon="cluster-o" to="/fenxiao">分销</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/mycart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { useRouter } from 'vue-router'
let router = useRouter()

// 底部导航栏的索引
const active: any = ref(0);

// 点击事件
let onchangefn: (index?: number | string) => void = function (index?: number | string) {
  // console.log(index);
  // switch (index) {
  //   case 0: router.push('/')
  //     break;
  //   case 1: router.push('/fenxiao')
  //     break;
  //   case 2: router.push('/mycart')
  //     break
  //   case 3: router.push('/mine')
  // }
}

// export default defineComponent({
//   name: "TabBar",
//   components: {},
//   // 1.可以使用vue2中的面向对象写法
//   data(){
//     return {}
//   },
//   // 2.也可以使用vue3中的组合式写法
//   setup() {
//     const active = ref(0);
//     return {
//       active,
//     };
//   },
// });
</script>

<style lang="scss" scoper>

</style>