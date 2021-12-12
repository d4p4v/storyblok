<template>
  <div v-editable="blok">
    <component :is="blok.type">{{ blok.text }}</component>
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
