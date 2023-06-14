<script>
import { store } from '../store';

export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        // crea una funzione che mi gestisce l'url da inserire nell'src dell immagine
        getImgUrl() {
            return this.store.apiBaseUrl + '/storage/' + this.project.image;
        }
    }  
}
</script>

<template>
    <div class="card h-100">
        <img v-if="project.image" :src="getImgUrl" :alt="project.title" class="card-img-top">
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