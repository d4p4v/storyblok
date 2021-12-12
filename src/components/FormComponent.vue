<template>
  <form
    v-editable="blok"
    v-on:submit.prevent
    class="
      flex flex-col
      justify-center
      shadow-md
      rounded
      px-8
      pt-6
      pb-8
      mb-4
      w-1/3
      text-left
      mx-auto
    "
  >
    <h2>Contact form</h2>
    <template v-for="item in blok.fields">
      <component
        :key="item._uid"
        :blok="item"
        :is="item.component"
        @input="onInput"
      ></component>
    </template>

    <button
      v-editable="blok"
      @click="submitForm"
      class="
        bg-green-500
        hover:bg-green-700
        text-white
        font-bold
        py-2
        px-4
        rounded
        border-none
        mt-4
      "
    >
      {{ blok.button }}
    </button>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FormComponent extends Vue {
  @Prop() blok!: {};

  onInput(value: string) {
    console.log('onInput: ', value);
  }

  submitForm() {}
}
</script>

<style scoped></style>
