<template>
    <div>
        <div class="name">{{name}}</div>
        <div class="size">{{size}}</div>
        <div class="data">{{date}}</div>
    </div>
</template>

<script>
    export default {
        name: 'FileInfo',
        props:{
            name: {
                // require: true,
                type: String,
            },size: {
                // require: true,
                type: Number,
            },date: {
                // require: true,
                type: String,
            },
        }
    }
</script>

<style scoped>

</style>
