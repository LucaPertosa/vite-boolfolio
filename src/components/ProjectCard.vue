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
    <div class="card h-100 position-relative">
        <img v-if="project.image" :src="getImgUrl" :alt="project.title" class="card-img-top ms_img_h">
        <div v-else class="d-flex align-items-center ms_img_h bg-secondary rounded-top">
            <p class="text-center">Nessuna immagine presente per questo progetto</p>
        </div>
        <div class="card-body">
            <div class="">
                <h5 class="">{{ project.title }}</h5>
                <div class="">
                    <p v-if="project.type" class="text-secondary">Tipologia: {{ project.type.name }}</p>
                    <p v-else class="text-secondary">Nessuna tipologia inserita</p>
                </div>
            </div>
            <div v-if="project.technologies.length > 0">
                <h6 class="">Tecnologie utilizzate:</h6>
                <ul class="list-group">
                    <li v-for="technology in project.technologies" class="list-group-item">
                        {{ technology.name }}
                    </li>
                </ul>
            </div>
            <p v-else>Nessuna tecnologia associata</p>
            <div class="position-absolute top-0 end-0">
                <router-link class="btn btn-primary" :to="{name: 'single-project' , params: {slug: project.slug} }">Dettagli</router-link>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms_img_h {
    height: 200px;
    image-resolution: c;
}
</style>