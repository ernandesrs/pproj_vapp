<template>
    <Line :id="getId" :options="getOptions" :data="{
        datasets: props.datasets,
        labels: props.labels,
    }" />
</template>

<script setup lang="ts">

import { Line } from 'vue-chartjs';
import { useBaseChart } from '@/composables/components/ui/useBaseChart';
import type { LineChartDataSet } from '@/types/components/ui/chart_type';

const props = withDefaults(defineProps<{
    id?: string,
    labels: Array<string>,
    datasets: Array<LineChartDataSet>
}>(), {});

const { getId, getOptions } = useBaseChart('line', { id: props.id });

</script>

<style scoped></style>