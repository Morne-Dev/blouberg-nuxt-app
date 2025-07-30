<template>
    <div class="bg-white rounded-xl p-8 max-w-xl mx-auto shadow-lg border border-gray-200 transition-all duration-300">
      
      <!-- Star Rating -->
      <div class="flex justify-center mb-4">
        <span v-for="i in 5" :key="i" class="text-yellow-400 text-xl">
          <svg v-if="i <= testimonial.rating" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M12 17.3l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.76-1.64 7.03z"/>
          </svg>
        </span>
      </div>
  
      <!-- Quote -->
      <p class="text-gray-700 text-lg italic text-center leading-relaxed mb-6">
        "{{ testimonial.quote }}"
      </p>
  
      <!-- Author Info -->
      <div class="flex flex-col items-center">
        <img 
          :src="`https://i.pravatar.cc/100?u=${testimonial.name}`" 
          alt="profile" 
          class="w-16 h-16 rounded-full mb-3 object-cover"
        />
        <div class="font-semibold text-gray-800 text-xl">{{ testimonial.name }}</div>
        <div class="text-gray-500 text-sm">{{ testimonial.location }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    testimonial: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  /* Optional: Add more animations, transitions, etc. */
  </style>
  