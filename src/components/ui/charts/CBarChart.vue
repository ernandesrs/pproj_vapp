<template>
    <Bar :id="getId" :options="getOptions" :data="{
        datasets: props.datasets,
        labels: props.labels,
    }" />
</template>

<script setup lang="ts">

import { Bar } from 'vue-chartjs';
import { useBaseChart } from '@/composables/components/ui/useBaseChart';
import type { BarChartDataSet, ChartProps } from '@/types/components/ui/chart_type';

const props = withDefaults(defineProps<ChartProps<BarChartDataSet>>(), {});

const { getId, getOptions } = useBaseChart('bar', { id: props.id, title: props.title });

</script>

<style scoped></style>