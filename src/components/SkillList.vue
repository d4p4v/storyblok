<template>
    <div v-editable>
        <h1>{{ blok.headline }}</h1>
        <ul>
            <li
                v-for="(skill, index) in blok.skills"
                :key="skill.component + index"
            >
                {{ skill.percentage }}% - {{ skill.name }} -
                {{ skill.description }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SkillList extends Vue {
    @Prop() blok!: {
        body: [];
    };
}
</script>

<style scoped></style>
