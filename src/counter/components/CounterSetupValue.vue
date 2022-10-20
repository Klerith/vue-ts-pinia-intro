<script setup lang="ts">
import { useCounterSetupStore } from '@/store/counter-setup';

const counter = useCounterSetupStore();

</script>
<template>
    <h1>El valor es: {{ counter.count }}</h1>
    <h4>último cambio: {{ counter.lastChanged }}</h4>
</template>


<style scoped>

</style>