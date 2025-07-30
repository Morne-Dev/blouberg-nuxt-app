<template>
  <nav
    class="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-30 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg shadow-white/5 ring-1 ring-white/10 transition-all duration-300"
  >
    <div class="px-6 py-4 flex items-center justify-between">
      <img
        src="@/assets/images/logo/Blouberg-Coastal-Escapes-Hero-Logo.png"
        alt="Logo"
        class="h-10 w-auto drop-shadow-md"
      />

      <ul class="flex gap-6 text-white font-semibold tracking-wide drop-shadow-sm">
        <li>
          <a href="#home" class="hover:text-blue-300 transition">Home</a>
        </li>
        <li>
          <a href="#about" class="hover:text-blue-300 transition">About</a>
        </li>
        <li>
          <a href="#services" class="hover:text-blue-300 transition">Services</a>
        </li>
        <li>
          <a href="#contact" class="hover:text-blue-300 transition">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// no script needed
</script>
