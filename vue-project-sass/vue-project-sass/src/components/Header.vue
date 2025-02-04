<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Header',
});
</script>

<template>
    <header class="header">
        <h1 class="header__title">Aprendiendo con Joaquin a hacer una APP de Vue, TypeScript y SASS</h1>
    </header>
</template>

<style lang="scss" scoped>
.header {
    @include center-flex;
    background-color: $primary-color;
    color: white;
    padding: 1rem;

    &__title {
        font-size: 2rem;
        font-weight: bold;
    }
}
</style>