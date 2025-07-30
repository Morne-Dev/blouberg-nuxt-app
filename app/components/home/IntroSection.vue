<template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center pt-60 sm:py-24"
    
    ref="introSection"
  >
    <!-- Top Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-0"
    ></div>

    <!-- Top Content -->
    <div
      class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between md:gap-12 px-6 sm:px-8"
    >
      <!-- Left image -->
      <div
        class="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 pt-6 animate-item"
        style="transition-delay: 0.1s;"
      >
        <img
          :src="interiorImage"
          alt="Modern vacation rental interior in Blouberg"
          class="max-w-full h-auto rounded-md drop-shadow-2xl rotate-[-1deg]"
        />
      </div>

      <!-- Right content -->
      <div
        class="w-full md:w-1/2 max-w-2xl mx-auto text-center md:text-left space-y-6 text-neutral-900"
      >
        <h1
          class="text-4xl sm:text-5xl font-serif font-semibold leading-snug sm:leading-tight animate-item"
          style="transition-delay: 0.2s;"
        >
          Professional Holiday Property Management<br />
          in Cape Town’s Coastal Hub Bloubergstrand
        </h1>

        <p
          class="text-lg text-neutral-700"
        >
          Property Management, Cleaning and Guest Coordination
        </p>

        <div
          class="space-y-4 animate-item text-neutral-700"
          style="transition-delay: 0.4s;"
        >
          <p>
            Owning a property is a valuable investment, but managing it can be
            challenging without the right support.
          </p>
          <p>
            At Blouberg Coastal Escapes, we offer expert holiday property
            management with 20+ years of experience.
          </p>
          <p>
            From maximizing rental income to ensuring seamless maintenance,
            cleaning, and guest coordination—we handle it all.
          </p>
        </div>

        <!-- CTA Button -->
        <div class="pt-4 animate-item" style="transition-delay: 0.5s;">
          <a
            href="#contact"
            class="inline-block bg-[#2C6E6F] hover:bg-[#245C5D] text-white px-6 py-3 rounded-md shadow-md transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div
      class="relative z-10 mt-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-y-16 sm:gap-12 text-center"
    >
      <div
        class="animate-item flex flex-col items-center"
        style="transition-delay: 0.1s;"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Established icon"
          class="h-10 w-10 text-[#4E9B9B] hover:text-[#2C6E6F] transition-transform duration-300 hover:scale-105"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path :d="mdiDomain" />
        </svg>
        <h3 class="mt-4 text-lg font-semibold text-neutral-800">Established</h3>
        <p class="mt-2 text-sm text-neutral-600">
          As Blouberg locals, we have in-depth knowledge of the holiday rental
          market. We tailor property management solutions that ensure your
          investment is profitable and stress-free.
        </p>
      </div>

      <div
        class="animate-item flex flex-col items-center"
        style="transition-delay: 0.2s;"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Reviews icon"
          class="h-10 w-10 text-[#4E9B9B] hover:text-[#2C6E6F] transition-transform duration-300 hover:scale-105"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path :d="mdiStarCircle" />
        </svg>
        <h3 class="mt-4 text-lg font-semibold text-neutral-800">Reviews</h3>
        <p class="mt-2 text-sm text-neutral-600">
          We’re consistently rated above the industry standard, thanks to our
          guest-focused approach. High reviews mean more bookings, repeat
          guests, and better returns for your property.
        </p>
      </div>

      <div
        class="animate-item flex flex-col items-center"
        style="transition-delay: 0.3s;"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Local icon"
          class="h-10 w-10 text-[#4E9B9B] hover:text-[#2C6E6F] transition-transform duration-300 hover:scale-105"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path :d="mdiMapMarkerRadius" />
        </svg>
        <h3 class="mt-4 text-lg font-semibold text-neutral-800">Local</h3>
        <p class="mt-2 text-sm text-neutral-600">
          We’re local to Blouberg and deeply involved in the community. That
          insight helps us offer personalized, reliable service for both
          homeowners and guests.
        </p>
      </div>
    </div>

    <!-- Bottom Fade to White -->
    <div
      class="absolute inset-x-0 bottom-0 h-[140vh] bg-gradient-to-t from-white via-[#ffffffee] to-transparent z-0"
    ></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'
import { mdiDomain, mdiStarCircle, mdiMapMarkerRadius } from '@mdi/js'

const introSection = ref(null)
let observer

function handleIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
      observer.unobserve(entry.target)
    }
  })
}

onMounted(() => {
  const options = { threshold: 0.2 }
  observer = new IntersectionObserver(handleIntersect, options)
  introSection.value
    .querySelectorAll('.animate-item')
    .forEach(el => observer.observe(el))
})

onBeforeUnmount(() => {
  observer.disconnect()
})
</script>

<style scoped>
.animate-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-item.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
