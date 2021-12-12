<template>
  <div v-editable="blok" class="image-component">
    <img
      :src="blok.src"
      :alt="blok.altText"
      :width="blok.width"
      :height="blok.hight"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Image extends Vue {
  @Prop() blok!: {};
}
</script>

<style scoped></style>
