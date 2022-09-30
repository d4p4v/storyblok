<template>
  <div>
    <h1>Page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Page extends Vue {
  @Prop() blok!: {};
}
</script>

<style scoped></style>
