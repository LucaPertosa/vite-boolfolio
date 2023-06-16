<script>
export default {
    name: "NotFound",
    methods: {
        goBack() {
            console.log(this.$router);
        }
    },
    mounted() {
        console.log('errore');
    }
}
</script>

<template>
    <div class="ms_error h-100 position-relative">
        <h2 class="text-center text-light py-5">La pagina che stai cercando non esiste</h2>
        <div class="position-absolute ms_pos">
            <router-link :to="{ name: 'home' }" class="btn btn-success">Go home</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .ms_error {
        background-image: url('../src/assets/img/404.png');
        background-position: center;
        background-repeat: no-repeat;
        background-color: #000000;
    }
    .ms_pos {
        bottom: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>