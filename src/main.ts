import Vue from "vue";
import App from "./App.vue";
import Page from "@/components/Page.vue";
import Headline from "@/components/Headline.vue";

Vue.config.productionTip = false;

Vue.component("page", Page);
Vue.component("headline", Headline);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
