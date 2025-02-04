<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Footer',
});
</script>

<template>
    <footer class="footer">
        <p class="footer__text">© 2025 Joaquin Ruiz - Todos los derechos reservados.</p>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    text-align: center;
    padding: 1rem;
    background-color: $secondary-color;
    color: white;

    &__text {
        font-size: 1rem;
    }
}
</style>