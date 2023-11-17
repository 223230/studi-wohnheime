<template>
    <div class="transition-all border-slate-200 dark:border-zinc-600 group" :class="expanded ?
        'pb-2 border-b bg-gray-50 dark:bg-zinc-800' :
        'bg-gray-100 dark:bg-zinc-900 hover:dark:bg-zinc-800 hover:bg-gray-50'">
        <div class="flex justify-between mx-4 items-center cursor-pointer py-2" @click="$emit('expand', !expanded)">
            <h2 class="text-sm select-none grow"
                :class="expanded ?
                    '' :
                    'text-gray-500 dark:text-zinc-400 group-hover:text-gray-800 group-hover:dark:text-zinc-100'">
                {{ address }}
            </h2>
            <div class="w-12 2xl:w-24 h-5 flex justify-end mx-4 shrink-0 transition-all" :class="expanded ? '-ml-12' : ''">
                <div v-for="(h, i) in housing" class="shrink w-5 transition-all"
                    :class="expanded ? `opacity-0 translate-y-full pointer-events-none delay-[${i * 100}ms]` : ''">
                    <div class="relative">
                        <HousingIcon :type="h.type"
                            :class="`top-0 left-0 absolute stroke-2 stroke-gray-100 dark:stroke-zinc-900 z-[${i}]`" />
                        <HousingIcon :type="h.type" :class="`z-[${i + 1}] absolute`" />
                    </div>
                </div>
            </div>
        </div>
        <ul class="space-y-2 px-4" :class="expanded ?
            '' :
            'hidden'">
            <li v-for="h in housing" class="grid grid-cols-[auto_1fr_auto] gap-2 text-sm">
                <HousingIcon :type="h.type"></HousingIcon>
                <span class="text-gray-500 dark:text-zinc-500">
                    {{ h.type }}
                </span>
                <span class="text-right text-gray-500 dark:text-zinc-400">
                    {{ h.waiting_period }} Monate
                </span>
            </li>
        </ul>
        <!-- <div class="mt-4 mb-2 mx-4" :class="expanded ? '' : 'hidden'">
            <Button @click="$emit('openSlideOver')" target="_blank" class="flex items-center w-fit">
                Mehr ansehen
                <Icon name="fluent:chevron-right-20-filled" size="20px" />
            </Button>
        </div> -->
    </div>
</template>

<script setup>
const props = defineProps([
    "address",
    "housing",
    "web_link",
    "expanded"
]);
</script>