<template>
    <div
        class="transition-all border-slate-200 dark:border-zinc-600 group"
        :class="open ?
            'pb-2 border-b bg-gray-50 dark:bg-zinc-800' :
            'bg-gray-100 dark:bg-zinc-900 hover:dark:bg-zinc-800 hover:bg-gray-50'"
    >
        <div
            class="flex justify-between mx-4 items-center cursor-pointer py-2"
            @click="open = !open"
        >
            <h2
                class="transition-all select-none grow"
                :class="open ?
                'text-lg font-bold' :
                'text-base font-normal text-gray-500 dark:text-zinc-400 group-hover:text-gray-800 group-hover:dark:text-zinc-100'"
            >
                {{ address }}
            </h2>
            <div
                class="transition-all w-12 grid grid-cols-2 gap-2 mx-2 shrink-0"
                :class="open ? 'hidden w-0' : ''"
            >
                <HousingIcon v-for="h in housing" :type="h.type"></HousingIcon>
            </div>
            <Icon
                name="fluent:chevron-down-24-filled"
                size="24px"
                class="transition-transform shrink-0"
                :class="open ?
                    'rotate-180 text-gray-600 dark:text-zinc-300' :
                    'text-gray-400 dark:text-zinc-500'"
            ></Icon>
        </div>
        <ul
            class="space-y-2 px-4"
            :class="open ?
                '' :
                'hidden'"
        >
            <li v-for="h in housing" class="grid grid-cols-[auto_1fr_auto] gap-2 text-sm">
                <HousingIcon :type="h.type"></HousingIcon>
                <span
                    class="opacity-75"
                >
                    {{ h.type }}
                </span>
                <span
                    class="text-right text-gray-500 dark:text-zinc-400"
                >
                    {{ h.waiting_period }} Monate
                </span>
            </li>
        </ul>
        <div
            class="mt-2"
            :class="open ? '' : 'hidden'"
        >
            <a
                :href="web_link"
                target="_blank"
                class="p-2 hover:text-gray-500 hover:dark:text-zinc-400 transition flex items-center justify-center w-fit ml-2 underline"
            >
                Mehr ansehen
                <Icon
                    name="fluent:chevron-right-20-filled"
                    size="20px"
                />
            </a>
        </div>
    </div>
</template>

<script setup>
const props = defineProps([
    "address",
    "housing",
    "web_link"
]);

let open = ref(false);
</script>