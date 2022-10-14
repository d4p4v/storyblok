<template>
    <div v-editable class="flex justify-center items-center">
        <h1 class="font-bold text-3xl">{{ blok.content }}</h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Headline extends Vue {
    @Prop() blok!: {
        content: string;
    };
}
</script>

<style scoped></style>
