import Vue from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue-2';
import App from './App.vue';
import Page from '@/components/Page.vue';
import Fragment from '@/components/Fragment.vue';
import Navigation from '@/components/Navigation.vue';
import Wrapper from '@/components/Wrapper.vue';
import Timeline from '@/components/Timeline.vue';
import SkillList from '@/components/SkillList.vue';

import './assets/tailwind.css';

Vue.config.productionTip = false;

Vue.use(StoryblokVue, {
    accessToken: process.env.VUE_APP_STORYBLOK_PREVIEW_TOKEN,
    use: [apiPlugin],
});

Vue.component('page', Page);
Vue.component('fragment', Fragment);
Vue.component('navigation', Navigation);
Vue.component('wrapper', Wrapper);
Vue.component('timeline', Timeline);
Vue.component('skill-list', SkillList);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
