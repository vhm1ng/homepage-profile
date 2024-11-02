// src/main.js
// #--------------- A personal homepage, lots of good things ---------------#
// #   homepage-profiles | https://github.com/vhm1ng/homepage-profile       #
// #   fork own imsyy.top | https://github.com/imsyy/home                   #
// #   source code edited by vhm1ng, edited in Vietnamese                   #
// #   easy to use for Vietnamese people                                    #
// #--------------- A personal homepage, lots of good things ---------------#

import { createApp } from "vue";
import "@/style/style.scss";
import App from "@/App.vue";
// Trích xuất module pinia
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// Trích xuất module swiper
import "swiper/css";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.mount("#app");

// PWA
navigator.serviceWorker.addEventListener("controllerchange", () => {
  // Hiện thông báo cập nhật
  console.log("Trang web được cập nhật, làm mới website để có trải nghiệm tốt nhất !");
  ElMessage("Trang web được cập nhật, làm mới website để có trải nghiệm tốt nhất !");
});
