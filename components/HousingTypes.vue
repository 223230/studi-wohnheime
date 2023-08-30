<template>
  <div class="transition-all"
    :class="housing_list_expanded ? 'w-[calc(100%_+_2rem)] -ml-4 bg-gray-100 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg' : ''">
    <div :class="housing_list_expanded ? 'w-full bg-gray-300 dark:bg-gray-950 overflow-scroll flex' : ''">
      <div class="transition-all"
        :class="housing_list_expanded ? 'flex shrink-0 grow min-w-max m-1.5 gap-1.5' : 'grid gap-2 lg:gap-4 sm:grid-cols-2'">
        <div v-for="(h, i) in housing_types" :key="i" :id="`h-${i}`"
          class="dark:bg-zinc-800 flex flex-col items-center justify-between relative overflow-hidden group transition-all hover:shadow-gray-300 hover:dark:shadow-zinc-950/50 hover:z-10 cursor-pointer select-none"
          @click="select(i)"
          :class="housing_list_expanded ?
            ('rounded-md hover:shadow hover:shadow-gray-400 hover:dark:shadow-black px-4 py-3 gap-1 grow ' + (i == selected_id ? 'bg-gray-100' : 'bg-gray-200')) : 'rounded-xl hover:shadow-lg hover:-translate-y-1 p-4 sm:p-8 gap-4 bg-gray-100'">
          <HousingIcon :size="`${housing_list_expanded ? '1.5' : '4'}rem`" :type="h.type" class="z-10 transition-all" />
          <HousingIcon :size="`${housing_list_expanded ? '3' : '4'}rem`" :type="h.type"
            class="absolute blur-3xl saturate-200 z-0 scale-[200%] opacity-10 group-hover:opacity-25 dark:opacity-50 dark:group-hover:opacity-75 group-hover:scale-[250%] transition-all" />
          <div class="text-center font-medium z-10 transition-all select-none"
            :class="housing_list_expanded ? 'text-sm  max-sm:hidden' : 'text-lg'">
            {{ h.type }}</div>
          <div class="text-center text-sm text-gray-500 dark:text-zinc-400 z-10 select-none"
            :class="housing_list_expanded ? 'hidden' : ''">{{ h.room_size }}<br>{{
              h.waiting_period }} Wartezeit</div>
        </div>
      </div>
    </div>
    <div class="mt-4 space-y-4 px-4 pb-6" v-if="housing_list_expanded">
      <div class="flex items-center gap-4">
        <HousingIcon :type="housing_types[selected_id].type" size="4rem" class=""></HousingIcon>
        <h3 class="text-xl font-bold w-2/3">
          {{ housing_types[selected_id].type }}
        </h3>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-600">
      <p class="text-gray-500 dark:text-zinc-400">
        <text v-for="n in housing_types[selected_id].notices
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
          <div class="font-bold text-xl leading-none">{{ housing_types[selected_id].room_count }}</div>
          <div class="text-gray-500 dark:text-zinc-400">Zimmer</div>
        </div>
        <div class="bg-gray-200 dark:bg-zinc-700 p-4 rounded-xl flex flex-col justify-center gap-1"
          :style="{ 'grid-area': 'room_size' }">
          <div class="font-bold text-xl leading-none">{{ housing_types[selected_id].room_size }}</div>
          <div class="text-gray-500 dark:text-zinc-400">Zimmergröße</div>
        </div>
        <div class="bg-gray-200 dark:bg-zinc-700 p-4 rounded-xl flex flex-col justify-center gap-1"
          :style="{ 'grid-area': 'furnished' }">
          <div class="font-bold text-xl leading-none capitalize">{{ housing_types[selected_id].furnished }}
          </div>
        </div>
        <div class="bg-gray-200 dark:bg-zinc-700 p-4 rounded-xl flex flex-col justify-center gap-1"
          :style="{ 'grid-area': 'rent' }">
          <div class="font-bold text-xl leading-none">{{ housing_types[selected_id].rent }}</div>
          <div class="text-gray-500 dark:text-zinc-400">Miete</div>
        </div>
        <div class="bg-gray-200 dark:bg-zinc-700 p-4 rounded-xl flex flex-col justify-center gap-1"
          :style="{ 'grid-area': 'waiting_period' }">
          <div class="font-bold text-xl leading-none">{{ housing_types[selected_id].waiting_period }}</div>
          <div class="text-gray-500 dark:text-zinc-400">Wartezeit</div>
        </div>
      </div>
      <ul class="text-gray-500 dark:text-zinc-400 list-disc pl-4 space-y-0">
        <li v-for="   n   in   housing_types[selected_id].facilities  ">{{ n }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps(["housing_types"]);

let housing_list_expanded = ref(false);
let selected_id = ref(-1);

function select(id) {
  if (housing_list_expanded.value) {
    if (selected_id.value == id) {
      housing_list_expanded.value = false;
    }
    else {
      housing_list_expanded.value = true;
      selected_id.value = id;
    }
  } else {
    housing_list_expanded.value = true;
    selected_id.value = id;

    setTimeout(() => {
      document.getElementById('h-' + id).scrollIntoView({ block: "nearest", behavior: 'smooth' });
    }, 200)
  }
}
</script>