import Vue from 'vue';
import App from './App.vue';
import Page from '@/components/Page.vue';
import Teaser from '@/components/Teaser.vue';
import Image from '@/components/Image.vue';
import Headline from '@/components/Headline.vue';
import Richtext from '@/components/Richtext.vue';
import Button from '@/components/Button.vue';
import Grid from '@/components/Grid.vue';
import FormComponent from '@/components/FormComponent.vue';
import FormInput from '@/components/FormInput.vue';
import './assets/tailwind.css';

Vue.config.productionTip = false;

Vue.component('page', Page);
Vue.component('teaser', Teaser);
Vue.component('image-component', Image);
Vue.component('headline', Headline);
Vue.component('richtext', Richtext);
Vue.component('button-component', Button);
Vue.component('grid', Grid);
Vue.component('form-component', FormComponent);
Vue.component('form-input', FormInput);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
