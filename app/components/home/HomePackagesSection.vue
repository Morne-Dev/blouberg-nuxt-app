<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f0fafa] to-[#eaf3f3] overflow-hidden">
    <!-- Decorative blobs -->
    <div class="absolute -top-32 -left-24 w-80 h-80 bg-[#6BD4D4]/30 rounded-full blur-3xl z-0"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#1D4E4F]/20 rounded-full blur-3xl z-0"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start z-10">
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="{ 'md:mt-8': index % 2 === 1 }"
      >
        <HomePackageCard
          :card="card"
          :expanded="expanded[index]"
          @toggle-expand="toggleExpand(index)"
        />
      </div>
    </div>
    <div
      v-for="(service, i) in services"
      :key="i"
      :class="{ 'md:mt-8': (cards.length + i) % 2 === 1 }"
    >
      <HomeServicesCard :card="service" />
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import HomePackageCard from './HomePackageCard.vue'
import HomeServicesCard from './HomeServicesCard.vue'

const cards = [
  {
    title: 'Complete Care Package',
    description: 'Ideal for property owners who want us to handle everything from bookings and inquiries to basic maintenance while focusing on essential services such as guest welcome, cleaning, and stocking amenities.',
    features: [
      'Booking & Inquiries Management',
      'Guest Welcome & Key Handover',
      'Property Inspection & Regular Maintenance Checks',
      'Basic Amenities',
      'Basic Maintenance'
    ],
    pricing: {
      commission: '20% of the booking fee',
      note: 'You will still pay a commission on each booking to incentivize Blouberg Coastal Escapes to drive bookings and provide high-quality service.'
    },
    addons: [
      '🎁 Special Occasion Packages: Flowers, wine & special touches (from R600)',
      '🧹 Mid-Stay Cleaning: For longer guest stays (from R300 per cleaning)',
      '👕 Laundry Service: Guests may request laundry for personal clothing'
    ]
  },
  {
    title: 'Premium Care Package',
    description: 'Designed for property owners wanting a fully managed experience including bookings, guest services, property maintenance, and luxury-level amenities.',
    features: [
      'Full Booking & Inquiry Management',
      'Guest Welcome & VIP Check-in',
      'Professional Cleaning After Check-out',
      'Laundry Service',
      'High-End Amenities',
      'Basic & Minor Maintenance',
      'Property Inspection & Regular Maintenance Checks',
      'Guest Experience Welcome Pack'
    ],
    pricing: {
      commission: '25% of the booking fee',
      note: 'Property owners pay commission on each booking to encourage high-quality service and booking optimization. Flat Fee from R1200 per month covers all services.'
    },
    addons: [
      '🎁 Special Occasion Packages: Flowers, wine & special touches (from R600)',
      '👕 Laundry Service: Guests may request laundry for personal clothing',
      '🧹 Mid-Stay Cleaning: For longer guest stays (from R300 per cleaning)'
    ]
  }
]

const services = [
  {
    title: 'Cleaning Services',
    description: 'Thorough and professional cleaning services ideal for preparing your property or maintaining cleanliness between stays.',
    features: [
      'Cleaning of all common areas (living room, dining room, kitchen, patio)',
      'We supply all cleaning materials and equipment',
      'Professional cleaning for hot tubs and Jacuzzis available'
    ],
    pricing: {
      commission: 'From R460 per cleaning session',
      note: 'Includes cleaning materials like disinfectants, vacuum cleaners, mops, etc. Hot Tub Cleaning add-on from R150.'
    },
    addons: [
      '❄️ Fridge Defrosting and Cleaning',
      '📦 Essential Items Restocking',
      '🎀 Personalized Guest Setup',
      '🛁 Hot Tub Cleaning Service (drain/refill, surface clean, sanitization)'
    ]
  },
  {
    title: 'Maintenance Services',
    description: 'Keep your property in top condition with basic repairs, urgent fixes, and minor maintenance to ensure smooth running and guest safety.',
    features: [
      'Basic Maintenance (minor plumbing, electrical, appliance repairs)',
      'Emergency Maintenance (urgent repairs outside working hours)',
      'Maintenance Package with regular check-ups and priority service'
    ],
    pricing: {
      commission: 'Basic Maintenance from R350 per call-out',
      note: 'Emergency Maintenance from R600. Maintenance Package starting at R1,000 per month.'
    },
    addons: [
      '🔧 Minor plumbing and electrical repairs',
      '🧰 Small appliance repairs and general fixes',
      '⚡ Emergency plumbing and electrical services'
    ]
  }
]

const expanded = reactive(Array(cards.length).fill(false))

function toggleExpand(index) {
  expanded[index] = !expanded[index]
}
</script>
