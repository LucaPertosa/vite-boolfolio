<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "SingleProjPage",
    data() {
        return {
            store,
            project: null,
            errorMsg: "",
        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        axios.get(`${this.store.apiBaseUrl}/api/projects/${slug}`).then((resp) => {
            if (resp.data.success) {
                console.log(resp.data.results);
                this.project = resp.data.results
            } else {
                this.errorMsg = resp
            }
        })
    }
}
</script>

<template>
    <div class="container">
        <div v-if="project">
            <h2 class="my-3">Progetto: {{ project.title }}</h2>
            <div class="my-3">
                <h3 v-if="project.type" class="text-secondary">Tipologia: {{ project.type.name }}</h3>
                <h3 v-else class="text-secondary">Nessuna tipologia inserita</h3>
            </div>
            <div class="ms_img bg-secondary rounded">
                <img v-if="project.image" :src="`${store.apiBaseUrl}/storage/${project.image}`" alt="" class="w-100 h-100 img-fluid rounded">
                <p v-else class="text-center">Nessuna immagine presente per questo progetto</p>
            </div>
            <h5 class="text-secondary my-3">Descrizione progetto:</h5>
            <p class="my-3">
                {{ project.description }}
            </p>
            <h5 class="text-secondary my-3">Tecnologie usate nel progetto:</h5>
            <div class="accordion" id="accordion">
                <div class="accordion-item" v-for="tech,index in project.technologies">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="false" :aria-controls="`collapse${index}`">
                            <strong>{{ tech.name }}</strong>
                        </button>
                    </h2>
                    <div :id="`collapse${index}`" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div class="accordion-body">
                            <strong>Spiegazione:</strong> {{ tech.description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms_img {
    width: 50%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>