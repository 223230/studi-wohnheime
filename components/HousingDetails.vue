<template>
  <div class="space-y-4">
    <div class="flex items-center gap-4">
      <HousingIcon :type="housing_type.type" size="4rem" class=""></HousingIcon>
      <h3 class="text-xl font-bold w-2/3">
        {{ housing_type.type }}
      </h3>
    </div>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-600">
    <p class="text-gray-500 dark:text-zinc-400">
      <text v-for="n in housing_type.notices
        .map(e => e.trim().replace(/\.$/, ''))
        .filter(e => e.length > 0)">{{ n + ". " }}</text>
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-[repeat(4,auto)] gap-2" style="
          grid-template-areas: 
              'room_count room_size room_size furnished'
              'rent rent waiting_period waiting_period';
          ">
      <div class="bg-gray-200 dark:bg-zinc-700 p-4 rounded-xl flex flex-col justify-center gap-1"
        :style="{ 'grid-area': 'room_count' }">
        <div class="font-bold text-xl leading-none">{{ housing_type.room_count }}</div>
        <div class="text-gray-500 dark:text-zinc-400">Zimmer</div>
      </div>
      <div class="bg-gray-200 dark:bg-zinc-700 p-4 rounded-xl flex flex-col justify-center gap-1"
        :style="{ 'grid-area': 'room_size' }">
        <div class="font-bold text-xl leading-none">{{ housing_type.room_size }}</div>
        <div class="text-gray-500 dark:text-zinc-400">Zimmergröße</div>
      </div>
      <div class="bg-gray-200 dark:bg-zinc-700 p-4 rounded-xl flex flex-col justify-center gap-1"
        :style="{ 'grid-area': 'furnished' }">
        <div class="font-bold text-xl leading-none capitalize">{{ housing_type.furnished }}
        </div>
      </div>
      <div class="bg-gray-200 dark:bg-zinc-700 p-4 rounded-xl flex flex-col justify-center gap-1"
        :style="{ 'grid-area': 'rent' }">
        <div class="font-bold text-xl leading-none">{{ housing_type.rent }}</div>
        <div class="text-gray-500 dark:text-zinc-400">Miete</div>
      </div>
      <div class="bg-gray-200 dark:bg-zinc-700 p-4 rounded-xl flex flex-col justify-center gap-1"
        :style="{ 'grid-area': 'waiting_period' }">
        <div class="font-bold text-xl leading-none">{{ housing_type.waiting_period }}</div>
        <div class="text-gray-500 dark:text-zinc-400">Wartezeit</div>
      </div>
    </div>
    <ul class="text-gray-500 dark:text-zinc-400 list-disc pl-4 space-y-0">
      <li v-for="n in housing_type.facilities">{{ n }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps(["housing_type"]);
</script>