<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import Pagination from './components/Pagination.vue';
import { store } from './store';

export default {
    data () {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,
            totalProjects: 0,
            pageXProject: 0,
            load: false,
        }; 
    },
    mounted () {
        this.getProjects();
    },
    methods: {
        getProjects (pageNumber) {
            this.store.load = true;
            axios.get(`${this.store.apiBaseUrl}/api/projects`, {
                params: {
                    page: pageNumber,
                }
            }).then(resp => {
                console.log(resp);
                this.store.projects = resp.data.results.data;
                this.store.currentPage = resp.data.results.current_page;
                this.store.lastPage = resp.data.results.last_page;
                this.store.totalProjects = resp.data.results.total;
                this.store.pageXProject = resp.data.results.data.length
            }).finally(() => {
                this.store.load = false;
            });
        }
    },
    components: {
        ProjectCard,
        Pagination,
    }
}
</script>

<template>
    <div class="container">
        <h1 class="text-center my-3">Lista dei progetti</h1>
        <section v-if="!load">
            <div class="d-flex justify-content-between text-secondary my-3">
                <div>
                    Pagina {{ store.currentPage }}
                </div>
                <div class="">
                    Stai visualizzando {{ store.pageXProject }} di {{ store.totalProjects }} Progetti
                </div>
            </div>
            <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1 g-3">
                <div class="col" v-for="project in store.projects" :key="project.id">
                    <ProjectCard :project="project"/>
                </div>
            </div>
            <div class="d-flex justify-content-center my-3">
                <Pagination @prev-page="getProjects(store.currentPage - 1)" @pick-page="getProjects" @next-page="getProjects(store.currentPage + 1)"/>
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
