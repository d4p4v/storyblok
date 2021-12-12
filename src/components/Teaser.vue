<template>
  <div class="teaser">
    <div class="teaser__inner bg-green-100">
      <h1>Headline</h1>
      <h2>Some other not so important title</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Teaser extends Vue {}
</script>

<style scoped></style>
