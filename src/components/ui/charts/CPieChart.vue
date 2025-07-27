<template>
    <Pie :id="getId" :options="getOptions" :data="{
        labels: props.labels,
        datasets: props.datasets
    }" />
</template>

<script setup lang="ts">

import { Pie } from 'vue-chartjs';
import { useBaseChart } from '@/composables/components/ui/useBaseChart';
import type { PieChartDataSet } from '@/types/components/ui/chart_type';

const props = withDefaults(defineProps<{
    id?: string,
    labels: Array<string>,
    datasets: Array<PieChartDataSet>
}>(), {});

const { getId, getOptions } = useBaseChart('pie', { id: props.id });

</script>

<style scoped></style>