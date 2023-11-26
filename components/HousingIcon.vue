<template>
    <Icon name="fluent:person-20-filled" size="20px" class="text-indigo-500 dark:text-indigo-300"
        v-if="type == 'Einzelappartements'" />
    <Icon name="fluent:person-20-filled" size="20px" class="text-indigo-500 dark:text-indigo-300"
        v-else-if="type.match(/Einzelappartement/g) || type == 'Doppelzimmer (für 1 Person)'" />
    <Icon name="fluent:people-community-20-filled" size="20px" class="text-teal-500 dark:text-teal-300"
        v-else-if="type.match(/(Einzelzimmer in )?[2-9]\d*er-Gruppenwohnung(en)?/g) || type == 'Einzelzimmer'" />
    <Icon name="fluent:people-community-20-filled" size="20px" class="text-yellow-500 dark:text-yellow-300"
        v-else-if="type.match(/Familie/g) || type == 'Familie mit Kind'" />
    <Icon name="fluent:people-20-filled" size="20px" class="text-rose-500 dark:text-rose-300" v-else />
</template>

<script setup>
const props = defineProps(["type"]);
</script>