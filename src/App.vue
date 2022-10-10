<template>
    <div id="app">
        <DymamicComponent />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DymamicComponent from './components/DynamicComponent.vue';

@Component({
    components: {
        DymamicComponent,
    },
})
export default class App extends Vue {}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
