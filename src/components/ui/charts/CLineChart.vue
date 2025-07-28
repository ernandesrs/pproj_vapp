<template>
    <Line :id="getId" :options="getOptions" :data="{
        datasets: props.datasets,
        labels: props.labels,
    }" />
</template>

<script setup lang="ts">

import { Line } from 'vue-chartjs';
import { useBaseChart } from '@/composables/components/ui/useBaseChart';
import type { ChartProps, LineChartDataSet } from '@/types/components/ui/chart_type';

const props = withDefaults(defineProps<ChartProps<LineChartDataSet>>(), {});

const { getId, getOptions } = useBaseChart('line', { id: props.id, title: props.title });

</script>

<style scoped></style>