<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            baseUrl: "http://127.0.0.1:8002",
        }
    }   
}
</script>

<template>
    <div class="card h-100">
        <img v-if="project.image" :src="`${baseUrl}/storage/${project.image}`" :alt="project.title" class="card-img-top">
        <div v-else class="my-3">
            <p class="text-center">Nessuna immagine presente per questo progetto</p>
        </div>
        <div class="card-body">
            <h5 class="text-center">{{ project.title }}</h5>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>