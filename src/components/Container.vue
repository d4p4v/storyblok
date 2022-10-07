<template>
  <div class="bg-blue-400">
    <div>Container</div>
    <template v-for="item in blok.content">
      <component
        :key="item._uid"
        :blok="item || null"
        :is="item.component"
      ></component>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Container extends Vue {
  @Prop() blok!: {};

  mounted() {
    console.log(this.blok);
  }
}
</script>

<style scoped></style>
