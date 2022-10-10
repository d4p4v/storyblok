<template>
    <div
        v-editable
        class="flex w-screen items-center justify-center flex-col"
        :style="{ height: `${blok.height}` }"
    >
        <div class="mb-24 h-min">
            {{ text }}
        </div>
        <div id="timeline">
            <div
                v-for="(item, index) in blok.entries"
                :style="{
                    width: `${100 / blok.entries.length}%`,
                    whiteSpace: 'pre',
                }"
                :key="item.component + index"
                class="flex items-center justify-center h-min"
            >
                <div class="year cursor-pointer" @click="updateText(item.text)">
                    {{ item.year }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Timeline extends Vue {
    @Prop() blok!: {
        body: [];
    };

    text: string = 'Press any element to find out more!';

    updateText(txt: string) {
        this.text = txt;
    }
}
</script>

<style scoped>
#timeline {
    width: 90%;
    height: 1px;
    background: linear-gradient(to right, #fff, #000, #fff);
    display: flex;
}

.year {
    border-radius: 100%;
    width: 60px;
    height: 60px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
