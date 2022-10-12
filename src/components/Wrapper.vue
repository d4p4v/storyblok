<template>
    <div
        v-editable
        class="flex w-full items-center justify-center"
        :style="{
            backgroundColor: `${blok.bg.color}`,
            height: `${blok.height}`,
        }"
    >
        <div
            class="flex items-center justify-center w-4/5 flex-col lg:flex-row"
        >
            <div
                v-for="(item, index) in blok.content"
                :style="{
                    textAlign: `${item.alignment}`,
                    color: `${item.foreground.color}`,
                    width: `${calculatedWidth}`,
                    whiteSpace: 'pre-wrap',
                    wordSpacing: 'length',
                }"
                :key="item.component + index"
                class="flex items-center justify-center"
            >
                <p class="mb-7 w-5/6 text-justify">{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Wrapper extends Vue {
    @Prop() blok!: {
        [x: string]: string;
    };

    calculatedWidth: string = '90%';

    mounted() {
        this.getWidth();
        window.addEventListener('resize', this.getWidth);
    }

    destroyed() {
        window.removeEventListener('resize', this.getWidth);
    }

    getWidth() {
        const w = document.body.offsetWidth;

        if (w > 1024) {
            this.calculatedWidth = `${100 / this.blok.content.length}%`;
        } else {
            this.calculatedWidth = '90%';
        }
    }
}
</script>

<style scoped></style>
