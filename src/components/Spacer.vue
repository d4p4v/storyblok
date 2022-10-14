<template>
    <div v-editable :style="{ height: blok.height, width: '100%' }"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Spacer extends Vue {
    @Prop() blok!: {
        height: string;
    };
}
</script>

<style scoped></style>
