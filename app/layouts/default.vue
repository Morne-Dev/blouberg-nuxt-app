<template>
  <div class="relative z-20">
    <Navbar />
  </div>
  <slot />
  <FooterSection />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import FooterSection from '@/components/home/FooterSection.vue'
</script>
