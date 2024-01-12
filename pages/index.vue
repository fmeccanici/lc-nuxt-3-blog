<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})
const title = useState('title');
const posts = await useNuxtApp().$apiFetch('/api/posts');
</script>

<template>
  <div class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300">
    <Title>Home | {{ title }}</Title>
    <PostItem v-for="post in posts" :key="post.id" :post="post"></PostItem>
  </div>
</template>

<style scoped>

</style>