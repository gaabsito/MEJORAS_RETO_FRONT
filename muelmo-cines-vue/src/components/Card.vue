<template>
    <div class="card">
        <h2 class="card__title">{{ title }}</h2>
        <p class="card__content">{{ content }}</p>
    </div>
</template>



<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Card',
    props: {
        title: {
            type: String, required: true,
        }, content: { type: String, required: true, },
    },
}); 
</script>


<style lang="scss" scoped>
.card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0,
            0, 0.1);

    &__title {
        color: $primary-color;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    &__content {
        color: #555;
        font-size: 1rem;
    }
}
</style>


