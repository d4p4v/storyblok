<template>
    <div>
        <!-- <h1>Page</h1> -->
        <ul
            class="h-20 flex justify-center items-center w-screen"
            :style="{
                backgroundColor: `${blok.background.color}`,
                color: `${blok.foreground.color}`,
                height: `${blok.height}`,
            }"
        >
            <li>
                <a
                    class="cursor-pointer"
                    :style="{
                        marginLeft: `${blok.spacing}`,
                        marginRight: `${blok.spacing}`,
                    }"
                    v-for="(item, index) in blok.links"
                    :key="item.component + index"
                    :href="'#' + item.id"
                    >{{ item.name }}</a
                >
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {
    @Prop() blok!: {
        background: {
            color: string;
        };
        foreground: {
            color: string;
        };
        height: string;
        spacing: string;
        links: [
            {
                component: string;
                id: string;
                name: string;
            }
        ];
    };
}
</script>

<style scoped></style>
