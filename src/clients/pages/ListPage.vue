<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';
import useClients from '../composables/useClients';
import LoadingModal from '../../shared/components/LoadingModal.vue';

const { isLoading, clients, currentPage, totalPages, getPage } = useClients();

</script>

<template>
    <div>
        <h1>Listado de clientes</h1>

        <!-- Client List -->
        <ClientList :clients="clients" />

        <!-- PaginationNumbers -->
        <PaginationNumbers 
            :current-page="currentPage"
            :total-pages="totalPages"
            @page-changed="getPage"
        />

        <!-- LoadingModal -->
        <LoadingModal v-if="isLoading"/>

    </div>
</template>

<style scoped>

</style>