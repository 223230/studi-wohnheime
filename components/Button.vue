<template>
  <a class="py-2 px-4 text-lg rounded font-semibold transition-colors select-none cursor-pointer items-center flex gap-2"
    :class="primary ?
      'bg-gray-800 text-gray-100 dark:bg-zinc-100 dark:text-zinc-800 hover:bg-gray-600 dark:hover:bg-zinc-400' :
      'bg-gray-300 text-gray-900 dark:bg-zinc-700 dark:text-zinc-100 hover:bg-gray-400 dark:hover:bg-zinc-600'">
    <slot />
  </a>
</template>

<script setup>
defineProps([
  "primary"
])
</script>