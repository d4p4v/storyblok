<template>
    <div
        v-editable
        class="flex w-screen items-center justify-center"
        :style="{
            backgroundColor: `${blok.bg.color}`,
            height: `${blok.height}`,
        }"
    >
        <div
            v-for="(item, index) in blok.content"
            :style="{
                textAlign: `${item.alignment}`,
                color: `${item.foreground.color}`,
                width: `${100 / blok.content.length}%`,
                whiteSpace: 'pre',
            }"
            :key="item.component + index"
            class="flex items-center justify-center"
        >
            <p class="w-min">
                {{ item.content }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Wrapper extends Vue {
    @Prop() blok!: {
        body: [];
    };
}
</script>

<style scoped></style>
