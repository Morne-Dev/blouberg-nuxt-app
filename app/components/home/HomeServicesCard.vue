<template>

    <div class="relative max-w-7xl mx-auto grid md:grid-cols-[1.3fr_0.7fr] gap-24 items-center z-10">
      <!-- Content -->
      <div class="space-y-14 relative z-10">
        <!-- Title and Description -->
        <div>
          <h2 class="text-5xl sm:text-6xl font-serif font-bold text-[#1D4E4F] relative leading-tight">
            {{ card.title }}
            <span class="absolute left-0 bottom-1 w-full h-2 bg-gradient-to-r from-[#6BD4D4] to-transparent rounded-full blur-sm opacity-50 -z-10"></span>
          </h2>
          <p class="mt-6 text-lg text-neutral-700 font-medium max-w-xl tracking-wide">
            {{ card.description }}
          </p>
        </div>

        <!-- Feature Card -->
        <div class="bg-white/80 backdrop-blur-md border border-[#1D4E4F33] rounded-3xl shadow-xl p-10 space-y-10 transition-all hover:shadow-2xl duration-500">
          <!-- Short intro: reuse description or add a new intro prop if desired -->
          <p class="text-neutral-700 text-base font-medium leading-relaxed">
            {{ card.description }}
          </p>

          <!-- What’s Included -->
          <div>
            <h3 class="text-2xl font-semibold text-[#1D4E4F] mb-5">What’s Included</h3>
            <ul class="space-y-4">
              <li
                v-for="(feature, idx) in card.features"
                :key="idx"
                class="flex items-start gap-4 text-[#144041] text-lg font-semibold"
              >
                <svg
                  class="w-6 h-6 text-[#1D4E4F] animate-bounce-slow"
                  :style="{ animationDelay: `${idx * 100}ms` }"
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

          <!-- Pricing -->
          <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-6 border border-[#1D4E4F22]">
            <h3 class="text-2xl font-semibold text-[#1D4E4F] mb-3">Pricing</h3>
            <p class="text-[#144041] text-lg font-semibold">
              <strong>Commission:</strong> {{ card.pricing.commission }}
            </p>
            <p class="text-sm text-[#144041aa] mt-1">
              {{ card.pricing.note }}
            </p>
          </div>

          <!-- Optional Add-ons -->
          <transition name="fade">
            <div v-if="expanded" class="pt-6 space-y-6 border-t border-neutral-200">
              <h3 class="text-xl font-semibold text-[#1D4E4F]">Optional Add-Ons</h3>
              <ul class="space-y-4 text-neutral-700 font-medium">
                <li
                  v-for="(addon, aidx) in card.addons"
                  :key="aidx"
                >
                  {{ addon }}
                </li>
              </ul>
            </div>
          </transition>

          <!-- Buttons -->
          <div class="pt-8 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button
              @click="expanded = !expanded"
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
      </div>

      <!-- Image (static) -->
      <div class="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(29,78,79,0.2)] rotate-[-1.5deg]">
        <div class="absolute inset-0 bg-gradient-to-tr from-[#6BD4D4] to-[#1D4E4F] opacity-20 rounded-3xl blur-2xl -z-10"></div>
      <img
        :src="holidayImage"
        alt="Holiday home in Cape Town"
        class="w-full h-[600px] md:h-[700px] lg:h-[800px] object-cover rounded-3xl"
      />
      </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import holidayImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'


defineProps({
  card: {
    type: Object,
    required: true
  }
})

const expanded = ref(false)
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
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
