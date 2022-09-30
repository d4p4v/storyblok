<template>
  <div>
    <h2>Headline</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Headline extends Vue {
  @Prop() blok!: {};
}
</script>

<style scoped></style>
