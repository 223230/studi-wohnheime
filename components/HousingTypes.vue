<template>
  <div class="transition-all"
    :class="housing_list_expanded ? 'w-[calc(100%_+_2rem)] -ml-6 bg-gray-100 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg' : ''">
    <div :class="housing_list_expanded ? 'w-full bg-gray-300 dark:bg-gray-950 overflow-scroll flex' : ''">
      <div class="transition-all"
        :class="housing_list_expanded ? 'flex shrink-0 grow min-w-max m-1.5 gap-1.5' : 'grid gap-2 lg:gap-4 sm:grid-cols-2'">
        <div v-for="(h, i) in housing_types" :key="i" :id="`h-${i}`"
          class="dark:bg-zinc-800 flex flex-col items-center justify-between relative overflow-hidden group transition-all hover:shadow-gray-300 hover:dark:shadow-zinc-950/50 hover:z-10 cursor-pointer select-none"
          @click="select(i)"
          :class="housing_list_expanded ?
            ('rounded-md hover:shadow hover:shadow-gray-400 hover:dark:shadow-black px-4 py-3 gap-1 grow ' + (i == selected_id ? 'bg-gray-100 dark:bg-zinc-600' : 'bg-gray-200')) : 'rounded-xl hover:shadow-lg hover:-translate-y-1 p-4 sm:p-8 gap-4 bg-gray-100'">
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
    <HousingDetails class="mt-4 pb-6 px-6" :housing_type="housing_types[selected_id]" v-if="housing_list_expanded">
    </HousingDetails>
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