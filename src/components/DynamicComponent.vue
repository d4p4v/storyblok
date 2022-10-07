<template>
  <div v-if="story.content">
    <!-- <span>Dynamic Component</span> -->
    <component :blok="story.content" :is="story.content.component"></component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { useStoryblokBridge, useStoryblokApi } from "@storyblok/vue-2";

@Component
export default class DymamicComponent extends Vue {
  story: any = {};

  storyblokApi = useStoryblokApi();

  async getStory(slug: string, version: string) {
    await this.storyblokApi
      .get(`cdn/stories/` + slug, {
        version: version,
      })
      .then((response: { data: { stories: [] } }) => {
        // this.story = response?.data?.story;
        this.story = response?.data?.stories.find(
          (item: { slug: string }) => item.slug === "home"
        );
        useStoryblokBridge(
          this.story?.id,
          (story: any) => (this.story = story)
        );
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }

  mounted() {
    let slug: string = "";
    slug = window.location.pathname.slice(1);

    if (window.location.search.includes("_storyblok")) {
      this.getStory(slug, "draft");
    } else {
      this.getStory(slug, "published");
    }
  }
}
</script>
