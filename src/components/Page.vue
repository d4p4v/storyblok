<template>
  <div v-editable="blok">
    <template v-for="item in blok.body">
      <component
        :key="item._uid"
        :blok="item || null"
        :is="item.component"
      ></component>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Page extends Vue {
  @Prop() blok!: {};
}
</script>

<style scoped></style>
