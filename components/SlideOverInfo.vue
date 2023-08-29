<template>
    <div class="
        w-full  lg:max-w-2xl
        h-full  lg:h-full
        bg-gray-200         border-white            shadow-black/50
        dark:bg-zinc-900    dark:border-zinc-600    dark:shadow-black
        lg:border-r
        lg:backdrop-blur-2xl shadow-2xl
        absolute top-0 left-0 z-[10000] overflow-hidden">
        <div class="
            absolute top-0 left-0 w-full border-b
            backdrop-blur-xl backdrop-saturate-200
            bg-gray-50 border-gray-200
            dark:bg-zinc-800 dark:border-zinc-600
            min-h-[3.5rem]
            z-20
        ">
            <div class="flex items-center gap-2 p-1">
                <div role="button" class="p-3 rounded-full hover:bg-white/20 transition-colors" @click="$emit('collapse')">
                    <Icon name="fluent:arrow-left-24-regular" size="24px" />
                </div>
                <div class="font-bold grow leading-tight sm:text-xl">{{ title }}</div>
            </div>
        </div>
        <div class="h-full overflow-auto">
            <img :src="images[0]" class="aspect-video w-full object-cover mt-14">
            <div class="mx-auto my-8 max-w-xl w-[calc(100%_-_2rem)]">
                <p class="sm:text-lg mb-4">{{ short_description }}</p>
                <div class="flex flex-wrap gap-2">
                    <Button href="https://ipack.studentenwerk-goettingen.de/wohnheimaufnahmeantrag.html" target="_blank"
                        :primary="true" class="flex gap-1">
                        <Icon name="fluent:form-24-regular" size="24px" /> Bewerben
                    </Button>
                    <Button :href="web_link" target="_blank" class="flex gap-1">
                        <Icon name="fluent:link-24-regular" size="24px" /> Original anzeigen
                    </Button>
                </div>
                <h2 class="text-2xl font-bold mt-12 mb-4">Wohnformen</h2>
                <div class="grid sm:grid-cols-2 gap-2 lg:gap-4">
                    <div v-for="h in housing_types"
                        class="bg-gray-100 dark:bg-zinc-800 p-4 sm:p-8 flex flex-col gap-4 items-center justify-between rounded-xl relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all hover:shadow-gray-300 hover:dark:shadow-zinc-950/50 hover:z-10">
                        <HousingIcon size="4rem" :type="h.type" class="z-10" />
                        <HousingIcon size="4rem" :type="h.type"
                            class="absolute blur-3xl saturate-200 z-0 scale-[200%] opacity-10 group-hover:opacity-25 dark:opacity-50 dark:group-hover:opacity-75 group-hover:scale-[250%] transition" />
                        <div class="text-center text-lg font-medium z-10">{{ h.type }}</div>
                        <div class="text-center text-sm text-gray-500 dark:text-zinc-400 z-10">{{ h.size }} m²<br>{{
                            h.waiting_period }} Monate Wartezeit</div>
                    </div>
                </div>
                <h2 class="text-2xl font-bold mt-12 mb-4">Ausstattung</h2>
                <p class="text-gray-500 dark:text-zinc-400"></p>
                <h2 class="text-2xl font-bold mt-12 mb-4">Parkmöglichkeiten</h2>
                <p class="text-gray-500 dark:text-zinc-400">{{ short_description }}</p>
                <h2 class="text-2xl font-bold mt-12 mb-4" v-if="images.length > 1">Bilder</h2>
                <div class="flex w-full gap-4">
                    <img v-for="url in images" :key="url" :src="url" class="aspect-video w-0 flex-1 rounded object-cover">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps([
    "title",
    "short_description",
    "images",
    "web_link",
    "housing_types"
]);
</script>