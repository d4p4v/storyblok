<template>
  <div>
    <!-- <h2>Headline</h2> -->
    <h1 v-editable="blok" class="text-red-500 text-bold">{{ blok.text }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Headline extends Vue {
  @Prop() blok!: {
    text: string;
  };
}
</script>

<style scoped></style>
