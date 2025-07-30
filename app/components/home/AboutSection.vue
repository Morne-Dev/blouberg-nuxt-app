<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center p-4 md:p-8">
    <div class="w-full max-w-6xl">
      <!-- Section header -->
      <div class="mb-12 md:mb-16">
        <div class="flex flex-col items-center md:items-start">
          <div class="relative inline-block">
            <h1 class="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              Our <span class="text-blue-600 italic">Journey</span>
            </h1>
            <div class="absolute bottom-0 left-0 w-20 h-1 bg-blue-500"></div>
          </div>
          <p class="text-lg text-gray-600 max-w-2xl text-center md:text-left">
            From Johannesburg to Bloubergstrand, crafting exceptional experiences along the way
          </p>
        </div>
      </div>

      <!-- Content section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Left column - Text content -->
        <div class="space-y-10">
          <!-- Story section -->
          <div class="relative pl-8 border-l-2 border-blue-100">
            <div class="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-blue-500"></div>
            <h2 class="text-xl font-bold text-blue-600 uppercase tracking-wider mb-4">Our Story</h2>
            <p class="text-gray-700 mb-3">
              Originally from Johannesburg, now based in beautiful Bloubergstrand.
            </p>
            <p class="text-gray-700">
              With years of experience in maintenance and medical reception, coupled with practice management expertise, we combined our skills to launch a property management and holiday hosting business 4 years ago, driven by a desire for a simpler, more fulfilling lifestyle.
            </p>
          </div>

          <!-- Skills section -->
          <div class="relative pl-8 border-l-2 border-blue-100">
            <div class="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-blue-500"></div>
            <h2 class="text-xl font-bold text-blue-600 uppercase tracking-wider mb-4">Our Skills and Experience</h2>
            <p class="text-gray-700 mb-4">
              For four years, we have managed holiday apartments with a focus on exceptional service and memorable stays. Backed by over 20 years of experience in maintenance, carpentry, and management, we ensure every property is maintained to the highest standards.
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Property Management</span>
              <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Maintenance Expertise</span>
              <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Guest Relations</span>
              <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Carpentry</span>
            </div>
          </div>

          <!-- Personal touch section -->
          <div class="relative pl-8 border-l-2 border-blue-100">
            <div class="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-blue-500"></div>
            <h2 class="text-xl font-bold text-blue-600 uppercase tracking-wider mb-4">Our Personal Touch</h2>
            <p class="text-gray-700">
              Our passion lies in connecting with people and sharing the unique charm of our region. We take pride in showcasing Cape Town's beauty and continuously seek innovative ways to enhance guest experiences through authentic local connections and personalized service.
            </p>
          </div>

          <!-- CTA Button -->
          <button class="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Discover Our Properties
          </button>
        </div>

        <!-- Right column - Image -->
        <div class="relative">
          <div class="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-70 z-10"></div>
            <div class="absolute inset-0 bg-blue-400 opacity-10 z-0"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center z-20 p-6">
                <h3 class="text-3xl font-serif text-white mb-4">Bloubergstrand</h3>
                <p class="text-blue-100 max-w-md">
                  Where the beauty of Cape Town meets exceptional hospitality
                </p>
              </div>
            </div>
          </div>
          
          <!-- Decorative elements -->
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-100 rounded-full opacity-80 z-0"></div>
          <div class="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-70 z-0"></div>
        </div>
      </div>
    </div>

    <!-- Wave decoration at bottom -->
    <div class="w-full mt-24">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" class="w-full">
        <path fill="#3b82f6" fill-opacity="0.1" d="M0,96L48,90C96,85,192,75,288,80C384,85,480,107,576,106.7C672,107,768,85,864,69.3C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurStorySection',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Poppins:wght@300;400;500;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>