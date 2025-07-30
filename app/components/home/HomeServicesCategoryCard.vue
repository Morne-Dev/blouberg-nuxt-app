<template>
  <div
    class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300
           border border-gray-100 text-center"
  >
    <div class="flex justify-center mb-6">
      <img
        :src="image"
        alt=""
        class="w-20 h-20 object-cover rounded-full border-4 border-blue-200 shadow-lg"
      />
    </div>
    <h3 class="text-xl font-bold text-gray-800 mb-1">{{ title }}</h3>
    <div class="w-12 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
    <p class="text-gray-600 text-sm leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
});
</script>
