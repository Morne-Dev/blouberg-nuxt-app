<template>
  <section class="relative py-24 px-6 overflow-hidden bg-white">
    <!-- White background behind everything (solid, no fade) -->
    <div class="absolute inset-0 bg-white z-0"></div>

    <!-- Video + white overlay with fade applied only here -->
    <div class="absolute inset-0 z-10 fade-only">
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="w-full h-full object-cover"
      >
        <source :src="ripplesVideo" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-white/80"></div>
    </div>

    <!-- Content above video and background -->
    <div class="relative z-20 max-w-6xl mx-auto text-center pt-50">
      <div class="mb-16">
        <h2 class="text-4xl font-extrabold text-gray-800 mb-4">Our Services</h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Seamless management for your holiday property — from check-in to cleanliness to repairs.
        </p>
      </div>

      <!-- Service Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <HomeServicesCategoryCard
          :image="holidayImg"
          title="Holiday Property Management"
          description="We handle everything: guests, bookings, check-ins, cleaning, and care—so you don’t have to."
        />
        <HomeServicesCategoryCard
          :image="cleaningImg"
          title="Cleaning Services"
          description="Professional teams follow a detailed checklist to leave every corner spotless."
        />
        <HomeServicesCategoryCard
          :image="maintenanceImg"
          title="Maintenance Services"
          description="Fast repairs and preventive checks to keep your property safe and guest-ready."
        />
      </div>
    </div>

    <!-- Bottom white fade -->
    <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-10"></div>
  </section>
</template>

<script setup>
import HomeServicesCategoryCard from './HomeServicesCategoryCard.vue';

import ripplesVideo from '@/assets/videos/blouberg-airbnb-holiday-property-management-ripples-background-video.mp4'
import holidayImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Holiday-Property-Management.png';
import cleaningImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Cleaning-Services.png';
import maintenanceImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Maintenance-Services.png';
</script>

<style scoped>
.fade-only {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 40%);
  mask-image: linear-gradient(to bottom, transparent 0%, black 40%);

  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;

  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  -webkit-mask-position: top left;
  mask-position: top left;
}
</style>