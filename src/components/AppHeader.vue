<script>
export default {
    name: "AppHeader",
    data() {
        return {
            menuItems: [
                {
                    label: "Home",
                    routeName: "home"
                },
                {
                    label: "Projects",
                    routeName: "projects"
                }
            ]
        }
    },
    methods: {
        currentRoot(routeName) {
            return this.$route.name === routeName
        }
    }
}
</script>

<template>
    <header>
        <nav class=" ms_headerH navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Boolfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" v-for="item in menuItems">
                            <router-link :to="{ name: item.routeName }" class="nav-link" :class="{active: currentRoot(item.routeName)}" aria-current="page">{{
                                item.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.ms_headerH {
    height: 70px;
}
</style>