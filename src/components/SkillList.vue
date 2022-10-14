<template>
    <div v-editable>
        <h1 class="mb-10">{{ blok.headline }}</h1>
        <div class="flex items-center flex-col">
            <div
                v-for="(skill, index) in blok.skills"
                :key="skill.component + index"
                class="w-3/4 flex items-center flex-col"
            >
                <p class="font-semibold">{{ skill.name }}</p>
                <p class="mb-2 w-full lg:w-1/2">{{ skill.description }}</p>
                <div class="flex w-full">
                    <div
                        :style="{
                            height: '20px',
                            backgroundColor: `${blok.bg.color}`,
                        }"
                        class="w-full mb-20"
                    >
                        <div
                            :style="{
                                width: `${skill.percentage}%`,
                                backgroundColor: `${blok.fg.color}`,
                            }"
                            class="h-[20px]"
                        ></div>
                    </div>
                    <p class="ml-4">{{ skill.percentage }}%</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SkillList extends Vue {
    @Prop() blok!: {
        [x: string]: string;
    };
}
</script>

<style scoped></style>
