<template>
    <div class="overflow-scroll">
        <Result v-for="w in results" :key="w.id" :id="'w-' + w.id" :raw_id="w.id" :address="w.address" :housing="w.housing"
            :web_link="w.web_link" :expanded="w.id == selected_id" @expand="(e) => expand(w.id, e)"></Result>
    </div>
</template>

<script setup>
let selected_id = ref(-1);

const props = defineProps([
    "results"
]);

const emit = defineEmits(['openSlideOver'])

function expand(id, e, scrollIntoView = false) {
    if (e) {
        selected_id.value = id;
        emit('openSlideOver', id);
        if (scrollIntoView) setTimeout(() => {
            document.getElementById('w-' + id).scrollIntoView({ block: "center" });
        }, 120);
    }
    else {
        selected_id.value = -1;
        emit('closeSlideOver');
    }
}

defineExpose({
    expand
})
</script>