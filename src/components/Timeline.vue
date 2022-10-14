<template>
    <div
        v-editable
        class="flex w-screen items-center justify-center flex-col"
        :style="{ height: `${blok.height}` }"
    >
        <div class="mb-24 h-min">
            {{ text }}
        </div>
        <div id="timeline" class="flex w-5/6 h-[1px]">
            <div
                v-for="(item, index) in blok.entries"
                :key="item.component + index"
                class="
                    w-full
                    flex
                    items-center
                    justify-center
                    whitespace-pre
                    h-min
                "
            >
                <div
                    class="
                        cursor-pointer
                        rounded-full
                        w-[56px]
                        h-[56px]
                        flex
                        justify-center
                        items-center
                        bg-white
                        border-black border-[1px]
                        hover:w-[60px] hover:h-[60px]
                        transition-all
                    "
                    @click="updateText(item)"
                >
                    {{ item.year }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

type TimelineType = {
    component: string;
    year: string;
    text: string;
};

@Component
export default class Timeline extends Vue {
    @Prop() blok!: {
        height: string;
        entries: TimelineType[];
    };

    text: string = 'Press any element to find out more!';

    updateText(item: any) {
        this.text = item.text;
    }
}
</script>

<style scoped>
#timeline {
    background: linear-gradient(to right, #fff, #000, #fff);
}
</style>
