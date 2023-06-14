import { reactive } from "vue";

export const store = reactive({
    apiBaseUrl: "http://127.0.0.1:8000",
    projects: [],
    currentPage: 1,
    lastPage: null,
    totalProjects: 0,
    pageXProject: 0,
    load: false,
});