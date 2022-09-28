import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入vant移动端,和样式
import Vant from 'vant'
import 'vant/lib/index.css';

// 移动端适配
import "amfe-flexible"

// 在vue实例中，将vant挂载
createApp(App).use(store).use(router).use(Vant).mount("#app");
