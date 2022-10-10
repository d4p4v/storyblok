<template>
    <div :id="blok.id">
        <!-- <h1>Page</h1> -->
        <template v-for="(item, index) in blok.items">
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
export default class Fragment extends Vue {
    @Prop() blok!: {
        body: [];
    };
}
</script>

<style scoped></style>
