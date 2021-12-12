<template>
  <ul
    v-editable="blok"
    class="grid py-8 mb-6"
    :class="{
      'grid-cols-2': blok.layout === '1/2',
      'grid-cols-3': blok.layout === '1/3',
    }"
  >
    <li :key="blok._uid" v-for="blok in blok.columns" class="grid px-6">
      <component :blok="blok" :is="blok.component" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Grid extends Vue {
  @Prop() blok!: {};
}
</script>

<style scoped></style>
