<template>
  <div>
    <component :blok="story.content" :is="story.content.component"></component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StoryblokClient from 'storyblok-js-client';

@Component
export default class DymamicComponent extends Vue {
  story = {
    content: {
      body: [],
    },
  };

  token = process.env.VUE_APP_STORYBLOK_PREVIEW_TOKEN;
  storyapi = new StoryblokClient({
    accessToken: this.token,
  });

  async getStory(slug: string, version: string, languageQuery: string) {
    await this.storyapi
      .get(`cdn/stories/` + slug + languageQuery, {
        version: version,
      })
      .then((response) => {
        console.log(response);
        this.story = response.data.story;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  created() {
    const langPath = window.location.pathname.slice(1, 6);
    let slug: string = '';
    let languageQuery: string = '';

    if (langPath == 'de-ch') {
      slug = window.location.pathname.slice(6);
      languageQuery = '?language=de-ch';
    } else {
      slug = window.location.pathname;
      languageQuery = '';
    }

    console.log(window.location.pathname);

    window.storyblok.init({
      accessToken: this.token,
    });

    window.storyblok.pingEditor(() => {
      if (window.location.search.includes('_storyblok')) {
        this.getStory(slug, 'draft', languageQuery);
      } else {
        this.getStory(slug, 'published', languageQuery);
      }

      if (window.storyblok.isInEditor()) {
        window.storyblok.on('input', (payload) => {
          this.story.content = payload?.story.content;
        });
      }
    });
  }
}
</script>
