<template>
  <div>
    <span>Dynamic Component</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DymamicComponent extends Vue {}
</script>
