<template>
    <div>
        <div class="cursor-pointer w-fit px-3 rounded select-none"
                :class="active ?
                        'bg-rose-500 hover:bg-rose-400 text-rose-50 dark:bg-rose-300 dark:hover:bg-rose-200 dark:text-rose-900 font-semibold'
                        : 'bg-gray-300 hover:bg-gray-200 dark:bg-zinc-700 dark:hover:bg-zinc-600'"
                @click="expanded = !expanded">
            {{filterName}}
        </div>
        <div class="absolute mt-1 left-2 w-72 bg-gray-50 dark:bg-zinc-800 border shadow-lg rounded-xl z-20 border-gray-300 dark:border-zinc-600 select-none"
            :class="expanded ? '' : 'hidden'"
            >
            <div class="flex mb-2 border-b border-gray-200 dark:border-zinc-600 justify-between items-center">
                <h2 class="text-xl font-bold my-3 ml-5">{{filterName}}</h2>
                <Button ghost icon class="mr-3">
                    <Icon name="material-symbols:close" size="24" @click="expanded = false"></Icon>
                </Button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        filterName: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            expanded: false
        }
    },
}
  

</script>

<style scoped>
/* Your component styles here */
</style>
