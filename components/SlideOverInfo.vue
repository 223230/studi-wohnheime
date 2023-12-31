<template>
    <div class="
        w-full  lg:max-w-xl
        h-full  lg:h-full
        bg-gray-200         border-white            shadow-black/50
        dark:bg-zinc-900    dark:border-zinc-600    dark:shadow-black
        lg:border-r
        shadow-2xl absolute top-0 left-0 z-[10000] overflow-hidden">
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
        <div class="h-full overflow-auto overscroll-none">
            <img :src="`https://studentenwerk-goettingen.de${images[0]}`" class="aspect-video w-full object-cover mt-14">
            <div class="mx-auto mt-8 mb-12 max-w-xl w-[calc(100%_-_4rem)]">
                <p class="text-justify text-gray-500 dark:text-zinc-400">{{ short_description }}</p>
                <div class="flex flex-wrap gap-2 my-8">
                    <Button href="https://ipack.studentenwerk-goettingen.de/wohnheimaufnahmeantrag.html" target="_blank"
                        :primary="true">
                        <Icon name="fluent:form-24-regular" size="24px" /> Bewerben
                    </Button>
                    <Button :href="web_link" target="_blank">
                        <Icon name="fluent:link-24-regular" size="24px" /> Original anzeigen
                    </Button>
                    <Button :href="`https://google.com/maps/place/${coords}`" target="_blank">
                        <Icon name="fluent:location-24-regular" size="24px" /> In Google Maps anzeigen
                    </Button>
                </div>
                <h2 class="text-2xl font-bold mt-12 mb-4" v-if="images.length > 1">Bilder</h2>
                <div class="flex w-full gap-4" v-if="images.length > 1">
                    <img v-for="url in images" :key="url" :src="`https://studentenwerk-goettingen.de${url}`"
                        class="aspect-video w-0 flex-1 rounded object-cover">
                </div>
                <div v-if="housing_types.length > 1">
                    <h2 class="text-2xl font-bold mt-12 mb-4">Wohnformen</h2>
                    <p class="text-gray-500 dark:text-zinc-400 mb-4">Wähl eine der Wohnformen
                        aus, um mehr Infos zu ihr zu
                        erhalten.
                    </p>
                    <HousingTypes :housing_types="housing_types" :key="title"></HousingTypes>
                </div>
                <HousingDetails v-else :housing_type="housing_types[0]" class="mt-14"></HousingDetails>
                <div class="grid grid-cols-2 gap-4" v-if="facilities[0].trim() != '' || parking_spots[0].trim() != ''">
                    <div v-if="facilities[0].trim() != ''">
                        <h2 class="text-2xl font-bold mt-12 mb-4">Ausstattung</h2>
                        <ul class="text-gray-500 dark:text-zinc-400 list-disc ml-4">
                            <li v-for="f in facilities">{{ f }}</li>
                        </ul>
                    </div>
                    <div v-if="parking_spots[0].trim() != ''">
                        <h2 class="text-2xl font-bold mt-12 mb-4">Parkmöglichkeiten</h2>
                        <ul class="text-gray-500 dark:text-zinc-400 list-disc pl-4">
                            <li v-for="p in parking_spots">{{ p }}</li>
                        </ul>
                    </div>
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
    "housing_types",
    "facilities",
    "parking_spots",
    "coords"
]);
</script>