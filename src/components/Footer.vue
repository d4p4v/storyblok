<template>
    <div
        v-editable
        class="
            sm:h-auto sm:flex-row
            flex-col
            h-min
            flex
            justify-center
            items-center
            sm:items-start
            w-screen
        "
        :style="{
            backgroundColor: `${blok.bg.color}`,
            paddingTop: `${blok.padding}`,
            paddingBottom: `${blok.padding}`,
        }"
    >
        <div
            class="w-max sm:my-0 my-2 mx-10"
            v-for="item in blok.items"
            :key="item._uid"
        >
            <p v-if="'content' in item" class="whitespace-pre">
                {{ item.content }}
            </p>
            <a
                v-if="'link' in item"
                :href="item.link"
                :style="{ color: `${item.fg.color}` }"
                >{{ item.text }}</a
            >
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
    @Prop() blok!: {
        bg: {
            color: string;
        };
        fg: {
            color: string;
        };
        padding: string;
        items: [
            {
                _uid: string;
                content: string;
                link: string;
                text: string;
                fg: {
                    color: string;
                };
            }
        ];
    };
}
</script>

<style scoped></style>
