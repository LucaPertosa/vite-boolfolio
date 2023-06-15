<script>
import { store } from '../store';

export default {
    name: 'Pagination',
    data() {
        return {
            store,
        }
    },
    emits: [
        'change-page'
    ],
    props: {
        currentPage: Number,
        lastPage: Number,
    },
}
</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" :class="{'disabled' : currentPage === 1}">
                <a class="page-link" @click.prevent="$emit('change-page', currentPage -  1)" href="">Previous</a>
            </li>
            <li class="page-item" v-for="pageNum in lastPage" :class="{'active' : pageNum === currentPage}">
                <a class="page-link" @click.prevent="$emit('change-page', pageNum)" href="">{{pageNum}}</a>
            </li>
            <li class="page-item" :class="{'disabled' : currentPage === lastPage}">
                <a class="page-link" @click.prevent="$emit('change-page', currentPage + 1)" href="">Next</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>

</style>