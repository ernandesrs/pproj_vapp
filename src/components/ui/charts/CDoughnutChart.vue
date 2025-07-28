<template>
    <Doughnut :id="getId" :options="getOptions" :data="{
        labels: props.labels,
        datasets: props.datasets,
    }" />
</template>

<script setup lang="ts">

import { useBaseChart } from '@/composables/components/ui/useBaseChart';
import type { DoughnutChartDataSet } from '@/types/components/ui/chart_type';
import { Doughnut } from 'vue-chartjs';

const props = withDefaults(defineProps<{
    id?: string,
    title?: string,
    labels: Array<string>,
    datasets: Array<DoughnutChartDataSet>
}>(), {});

const { getId, getOptions } = useBaseChart('doughnut', { id: props.id, title: props.title });

</script>

<style scoped></style>