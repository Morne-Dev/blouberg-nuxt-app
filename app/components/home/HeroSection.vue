<template>
  <section
    class="min-h-screen w-full bg-cover bg-center relative flex flex-col items-center justify-center px-4 sm:px-8 pt-[10vh] pb-20 overflow-auto"
   
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/20 z-0"></div>

    <!-- Content -->
    <div class="relative z-10 text-center text-white w-full max-w-4xl">
      <!-- Logo -->
      <img
        v-if="logoUrl"
        :src="logoUrl"
        alt="Logo"
        class="mx-auto mb-10 max-h-[45vh] object-contain logo-animate"
      />

      <!-- Slogan -->
      <p
        class="text-[35px] text-white text-center tracking-wide drop-shadow-md slogan-animate"
        style="font-family: 'Cormorant Garamond', serif; text-transform: none;"
      >
        Helping you find the right fit, every time
      </p>
    </div>
  </section>
</template>

<script setup>

import logoUrl from '@/assets/images/logo/Blouberg-Coastal-Escapes-Hero-Logo.png'
</script>

<style scoped>
/* Logo Animation */
@keyframes logoFadeScale {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.logo-animate {
  animation: logoFadeScale 1.2s ease-out forwards;
  will-change: opacity, transform;
}

/* Slogan Animation */
@keyframes sloganSlideIn {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.slogan-animate {
  animation: sloganSlideIn 1s ease-out 1.4s forwards;
  opacity: 0; /* Force initial hidden state */
  will-change: opacity, transform;
}
</style>
