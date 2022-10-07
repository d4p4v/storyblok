import Vue from "vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue-2";
import App from "./App.vue";
import Page from "@/components/Page.vue";
import Headline from "@/components/Headline.vue";
import Container from "@/components/Container.vue";
import "./assets/tailwind.css";

Vue.config.productionTip = false;

Vue.use(StoryblokVue, {
  accessToken: process.env.VUE_APP_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
});

Vue.component("page", Page);
Vue.component("headline", Headline);
Vue.component("container", Container);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
