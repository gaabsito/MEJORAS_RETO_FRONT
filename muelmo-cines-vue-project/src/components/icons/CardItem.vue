<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  imageUrl: String, // Nueva propiedad para la imagen
});
</script>

<template>
  <div class="card">
    <img :src="imageUrl" alt="Card image" class="card-image" />
    <div class="card-content">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <a href="#" class="card-link">LEER MÁS &gt;</a>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(207, 207, 207);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
  text-align: center;
}

.card-content h1 {
  font-size: 1.2rem;
  margin: 10px 0 5px;
  font-weight: bold;
}

.card-content p {
  font-size: 0.9rem;
  color: #666;
  margin: 5px 0 10px;
}

.card-link {
  color: #007bff;
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: bold;
}

.card-link:hover {
  text-decoration: underline;
}
</style>
