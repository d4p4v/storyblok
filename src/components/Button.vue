<template>
  <button
    v-editable="blok"
    @click="redirectTo(blok.redirect.cached_url)"
    class="
      bg-green-500
      hover:bg-green-700
      text-white
      font-bold
      py-2
      px-4
      rounded
      border-none
    "
  >
    {{ blok.label }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop() blok!: {};

  redirectTo(link: string): void {
    window.location.href = link;
  }
}
</script>

<style scoped></style>
