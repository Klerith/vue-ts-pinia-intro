<script setup lang="ts">
import type { Client } from '@/clients/interfaces/client';

interface Props {
    clients: Client[]
}

const props = defineProps<Props>();

</script>

<template>
    <ul>
        <li 
            v-for="client of props.clients"
            :key="client.id">
            <RouterLink :to="{
                name: 'client-id',
                params: { id: client.id }
            }">
                {{ client.name }}
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped>

</style>