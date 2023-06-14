<script>
import { store } from '../store';

export default {
    name: 'Pagination',
    data() {
        return {
            store,
        }
    },
    emits : [
        'prev-page',
        'pick-page',
        'next-page',
    ],
}
</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" :class="{'disabled' : store.currentPage === 1}">
                <a class="page-link" @click.prevent="$emit('prev-page')" href="">Previous</a>
            </li>
            <li class="page-item" v-for="pageNum in store.lastPage" :class="{'active' : pageNum === store.currentPage}">
                <a class="page-link" @click.prevent="$emit('pick-page', pageNum)" href="">{{pageNum}}</a>
            </li>
            <li class="page-item" :class="{'disabled' : store.currentPage === store.lastPage}">
                <a class="page-link" @click.prevent="$emit('next-page')" href="">Next</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>

</style>