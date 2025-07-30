<template>
    <div
      class="bg-white/80 backdrop-blur-md border border-[#1D4E4F33] rounded-3xl shadow-xl p-10 space-y-8 transition-all hover:shadow-2xl hover:scale-105 duration-500 relative"
    >
      <h3 class="text-3xl font-serif font-bold text-[#1D4E4F] relative leading-tight">
        {{ card.title }}
        <span
          class="absolute left-0 bottom-1 w-full h-2 bg-gradient-to-r from-[#6BD4D4] to-transparent rounded-full blur-sm opacity-50 -z-10"
        ></span>
      </h3>
  
      <p class="text-neutral-700 text-base font-medium leading-relaxed">
        {{ card.description }}
      </p>
  
      <div>
        <h4 class="text-2xl font-semibold text-[#1D4E4F] mb-4">What’s Included</h4>
        <ul class="space-y-4">
          <li
            v-for="(feature, i) in card.features"
            :key="i"
            class="flex items-center gap-4 text-[#144041] text-lg font-semibold"
          >
            <svg
              class="w-6 h-6 text-[#1D4E4F] animate-bounce-slow"
              :style="{ animationDelay: `${i * 100}ms` }"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {{ feature }}
          </li>
        </ul>
      </div>
  
      <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-6 border border-[#1D4E4F22]">
        <h4 class="text-2xl font-semibold text-[#1D4E4F] mb-3">Pricing</h4>
        <p class="text-[#144041] text-lg font-semibold">
          <strong>Commission:</strong> {{ card.pricing.commission }}
        </p>
        <p class="text-sm text-[#144041aa] mt-1">{{ card.pricing.note }}</p>
      </div>
  
      <transition name="fade">
        <div v-if="expanded" class="pt-6 space-y-6 border-t border-neutral-200">
          <h4 class="text-xl font-semibold text-[#1D4E4F]">Optional Add-Ons</h4>
          <ul class="space-y-4 text-neutral-700 font-medium">
            <li v-for="(addon, i) in card.addons" :key="i">{{ addon }}</li>
          </ul>
        </div>
      </transition>
  
      <div class="pt-8 flex flex-col sm:flex-row gap-5 justify-center items-center">
        <button
          @click="$emit('toggle-expand')"
          class="text-[#1D4E4F] underline font-medium hover:text-[#144041] transition"
        >
          {{ expanded ? 'Hide Add-Ons' : 'Read More About Add-Ons' }}
        </button>
  
        <button
          class="bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition active:scale-95"
        >
          Get Started
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    card: Object,    // Receives the entire card data object from parent
    expanded: Boolean  // Receives expanded state from parent
  })
  
  defineEmits(['toggle-expand']) // Emits toggle-expand event to parent when button clicked
  </script>
  
  <style scoped>
  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
  }
  .animate-bounce-slow {
    animation: bounce-slow 2s infinite;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  