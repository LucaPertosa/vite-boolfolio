<script>
import AppHeader from './components/AppHeader.vue';

export default {
    components: {
        AppHeader,
    }
}
</script>

<template>
    <AppHeader />
    <div class="ms_height">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @use "./styles/general.scss" as *;
    .ms_height {
        height: calc(100vh - 70px);
    }
</style>
