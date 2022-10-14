<template>
    <div>
        <!-- <h1>Page</h1> -->
        <template v-for="(item, index) in blok.body">
            <component
                :key="item.component + index"
                :blok="item || null"
                :is="item.component"
            ></component>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Page extends Vue {
    @Prop() blok!: {
        body: [
            {
                component: string;
            }
        ];
    };
}
</script>

<style scoped></style>
