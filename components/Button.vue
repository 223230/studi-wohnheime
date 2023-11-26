<template>
  <a class="rounded font-semibold transition-colors select-none cursor-pointer items-center flex gap-2"
    :class="
      (ghost ? 'hover:bg-gray-200 dark:hover:bg-zinc-600' : 
        (primary ?
          'bg-gray-800 text-gray-100 dark:bg-zinc-100 dark:text-zinc-800 hover:bg-gray-600 dark:hover:bg-zinc-400' :
          'bg-gray-300 text-gray-900 dark:bg-zinc-700 dark:text-zinc-100 hover:bg-gray-400 dark:hover:bg-zinc-600')
      )
      + (icon ? ' p-1 h-fit w-fit' : (small ? ' text-base py-1 px-4' : ' text-lg py-2 px-4'))"
    >
    <slot />
  </a>
</template>

<script setup>
defineProps({
  "primary": {
    type: Boolean,
    default: false
  },
  "ghost": {
    type: Boolean,
    default: false
  },
  "small": {
    type: Boolean,
    default: false
  },
  "icon": {
    type: Boolean,
    default: false
  },
})
</script>