<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
    data () {
        return {
            projects: [],
            baseUrl: "http://127.0.0.1:8002",
        }; 

    },
    mounted () {
        this.getProjects();
    },
    methods: {
        getProjects () {
            axios.get(`${this.baseUrl}/api/projects`).then(resp => {
                this.projects = resp.data.results
                console.log(this.projects);
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
        <div class="row row-cols-4 g-3">
            <div class="col" v-for="project in projects" :key="project.id">
                <ProjectCard :project="project"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use "./styles/general.scss" as *;
</style>
