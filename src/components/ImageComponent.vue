<template>
  <div v-editable="blok" class="image-component">
    <img
      :src="blok.src.filename"
      :alt="blok.altText"
      :width="blok.width"
      :height="blok.hight"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ImageComponent extends Vue {
  @Prop() blok!: {};

  created() {
    console.log(this.blok);
  }
}
</script>

<style scoped></style>
