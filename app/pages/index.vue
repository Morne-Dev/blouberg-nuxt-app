<template>
  <div class="relative w-full min-h-screen overflow-x-hidden">
    <!-- Background video layer -->
    <div
      class="fixed inset-0 z-0 bg-black"
    >
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="w-full h-full object-cover"
      >
        <source :src="bgVideo" type="video/mp4" />
      </video>
    </div>

    <div class="relative z-10">
      <HeroSection />
      <IntroSection />
      <HomeServicesCategorySection />
      <TestimonialsSection />
      <HomePackagesSection />
      <AboutSection />
    </div>
  </div>
</template>

<script setup>
import bgVideo from '@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4'
import HeroSection from '@/components/home/HeroSection.vue'
import IntroSection from '@/components/home/IntroSection.vue'
import HomeServicesCategorySection from '@/components/home/HomeServicesCategorySection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import HomePackagesSection from '@/components/home/HomePackagesSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
</script>
