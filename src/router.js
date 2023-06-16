import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import SingleProjPage from './pages/SingleProjPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsPage
        },
        {
            path: "/projects/:slug",
            name: "single-project",
            component: SingleProjPage,
        }
    ]
});

export { router };