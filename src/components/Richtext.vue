<template>
  <div v-editable="blok">
    <!-- <component
      v-for="(paragraphItem, index) in blok.content.content"
      :key="index"
      :is="getComponent(paragraphItem)"
    >
      <span
        v-for="(spanItem, index) in paragraphItem.content"
        :key="index"
        :class="getClass(spanItem)"
      >
        {{ spanItem.text }}
      </span>
    </component> -->

    <div v-html="richtext(blok.content)"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import StoryblokClient from 'storyblok-js-client';

@Component
export default class Richtext extends Vue {
  @Prop() blok!: {
    content: {
      content: {
        0: {
          content: {};
        };
      };
    };
  };

  richtext(text: any) {
    let Storyblok = new StoryblokClient({
      accessToken: process.env.VUE_APP_STORYBLOK_PREVIEW_TOKEN,
    });

    console.log(Storyblok.richTextResolver.render(text));

    return Storyblok.richTextResolver.render(text);
  }

  getComponent(item: any) {
    if (item.type === 'heading') {
      return 'h1';
    } else {
      return 'p';
    }
  }

  getClass(classArray: any) {
    let applyClass;
    if (classArray.marks) {
      classArray.marks.map((item: any) => {
        switch (item.type) {
          case 'bold':
            applyClass = 'font-bold';
            break;
          case 'italic':
            applyClass = 'italic';
            break;
          default:
            applyClass = '';
            break;
        }
      });
    }
    return applyClass;
  }

  created() {
    console.log(this.blok);
  }
}
</script>

<style scoped></style>
