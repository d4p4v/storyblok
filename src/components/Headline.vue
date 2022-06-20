<template>
  <div v-editable="blok">
    <!-- <component :is="blok.type">{{ blok.text }}</component> -->
    <h1>{{ blok.text }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Headline extends Vue {
  @Prop() blok!: {};
}
</script>

<style scoped></style>
