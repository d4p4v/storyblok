<template>
  <div v-editable="blok" class="mr-7 mb-4">
    <template v-if="blok.type === 'textarea'">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        style="max-width: 400px"
        :for="blok.name"
        >{{ blok.label }}
      </label>
      <textarea
        :id="blok.name"
        :name="blok.name"
        :placeholder="blok.placeholder"
        v-model="inputValue"
        @change="$emit('input', inputValue)"
        class="
          shadow
          appearance-none
          border
          rounded
          w-full
          py-2
          px-3
          focus:outline-none focus:shadow-outline
        "
      ></textarea>
    </template>
    <template v-else>
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        :for="blok.name"
        >{{ blok.label }}</label
      >

      <input
        :type="blok.type"
        :id="blok.name"
        :name="blok.name"
        :placeholder="blok.placeholder"
        v-model="inputValue"
        @change="$emit('input', inputValue)"
        class="
          shadow
          appearance-none
          border
          rounded
          w-full
          py-2
          px-3
          focus:outline-none focus:shadow-outline
        "
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FormInput extends Vue {
  @Prop() blok!: {};

  inputValue = '';
}
</script>

<style scoped></style>
