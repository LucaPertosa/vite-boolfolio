<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import { store } from './store';

export default {
    data () {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,
            totalProjects: 0,
            load: false,
        }; 
    },
    mounted () {
        this.getProjects();
    },
    methods: {
        getProjects (pageNuber = 1) {
            this.load = true;
            axios.get(`${this.store.apiBaseUrl}/api/projects`, {
                params: {
                    page: pageNuber,
                }
            }).then(resp => {
                console.log(resp);
                this.projects = resp.data.results.data;
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                this.totalProjects = resp.data.results.total;
            }).finally(() => {
                this.load = false;
            });
        }
    },
    components: {
        ProjectCard,
    }
}
</script>

<template>
    <div class="container">
        <h1 class="text-center my-3">Lista dei progetti</h1>
        <section v-if="!load">
            <div class="text-end text-secondary my-3">
                Trovati {{ totalProjects }} Progetti
            </div>
            <div class="row row-cols-4 g-3">
                <div class="col" v-for="project in projects" :key="project.id">
                    <ProjectCard :project="project"/>
                </div>
            </div>
            
        </section>
        <section v-else>
            <div class="d-flex align-items-center justify-content-center">
                <strong class="text-info">Loading...</strong>
                <div class="spinner-border text-info ms-3" role="status" aria-hidden="true"></div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    @use "./styles/general.scss" as *;
</style>
