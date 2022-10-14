<template>
    <div
        v-editable
        class="flex w-full items-center justify-center pt-7 lg:pb-7"
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
                    textAlign: `${!('src' in item) ? item.alignment : ''}`,
                    color: `${!('src' in item) ? item.fg.color : ''}`,
                }"
                :key="item.component + index"
                class="
                    flex
                    whitespace-pre-wrap
                    items-center
                    w-4/5
                    lg:w-2/5
                    justify-center
                "
            >
                <p v-if="'content' in item" class="lg:mb-0 mb-7 w-5/6">
                    {{ item.content }}
                </p>
                <a
                    v-if="'link' in item"
                    :href="item.link"
                    class="lg:mb-0 mb-7 w-5/6 underline"
                    >{{ item.text }}</a
                >
                <img
                    v-if="'src' in item"
                    class="lg:mb-0 mb-7"
                    :style="{ height: `${item.size}` }"
                    :src="item.src.filename"
                    :alt="item.alt"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Wrapper extends Vue {
    @Prop() blok!: {
        bg: {
            color: string;
        };
        height: string;
        content: [
            {
                alignment: string;
                fg: { color: string };
                component: string;
                link: string;
                content: string;
                text: string;
                size: string;
                src: { filename: string };
                alt: string;
            }
        ];
    };
}
</script>

<style scoped></style>
