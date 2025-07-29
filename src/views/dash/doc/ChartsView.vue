<template>
    <CPage title="Charts" without-header>
        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'Charts',
                texts: [
                    'Chart component, even more simplified, using under the hood, the Vue Chart JS components (https://vue-chartjs.org/guide).',
                ]
            }
        ]" />

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CBarChart',
                texts: [
                    'Chart bar component.'
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'id',
                            type: 'string',
                            required: false,
                            desc: 'Chart id.',
                            allowedValues: '--',
                            defaultValue: '---'
                        },
                        {
                            name: 'title',
                            type: 'string',
                            required: false,
                            desc: 'Chart title.',
                            allowedValues: '--',
                            defaultValue: '---'
                        },
                        {
                            name: 'labels',
                            type: 'string[]',
                            required: true,
                            desc: 'Chart labels.',
                            allowedValues: '--',
                            defaultValue: '---'
                        },
                        {
                            name: 'datasets',
                            type: '{ backgroundColor?: ChartColor, data: (number, [number, number])[] }[]',
                            required: true,
                            desc: 'Chart datasets.',
                            allowedValues: '--',
                            defaultValue: '---'
                        }
                    ]
                }
            }
        ]">
            <template #previews>
                <div class="flex-1 grid grid-cols-12 gap-5">
                    <CCard class="col-span-12 md:col-span-6" title="Basic chart bar">
                        <CBarChart :labels="['JAN', 'FEB', 'MAR', 'APR']" :datasets="[
                            {
                                label: 'Data #1',
                                data: [20, 30, 10, 35],
                                backgroundColor: ChartColors.BLUE
                            },
                            {
                                label: 'Data #2',
                                data: [25, 10, 35, 15],
                                backgroundColor: ChartColors.EMERALD
                            }
                        ]" />
                    </CCard>

                    <CCard class="col-span-12 md:col-span-6" title="With title">
                        <CBarChart title="Chart title" :labels="['JAN', 'FEB', 'MAR', 'APR']" :datasets="[
                            {
                                label: 'Data #1',
                                data: [20, 30, 10, 35],
                                backgroundColor: ChartColors.BLUE
                            },
                            {
                                label: 'Data #2',
                                data: [25, 10, 35, 15],
                                backgroundColor: ChartColors.EMERALD
                            }
                        ]" />
                    </CCard>
                </div>
            </template>
        </CDocSection>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CPieChart & CDoughnutChart',
                texts: [
                    'Pie and doughnut chart component.'
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'id',
                            type: 'string',
                            required: false,
                            desc: 'Chart id.',
                            allowedValues: '--',
                            defaultValue: '---'
                        },
                        {
                            name: 'title',
                            type: 'string',
                            required: false,
                            desc: 'Chart title.',
                            allowedValues: '--',
                            defaultValue: '---'
                        },
                        {
                            name: 'labels',
                            type: 'string[]',
                            required: true,
                            desc: 'Chart labels.',
                            allowedValues: '--',
                            defaultValue: '---'
                        },
                        {
                            name: 'datasets',
                            type: '{ backgroundColor?: ChartColor[], data: number[] }[]',
                            required: true,
                            desc: 'Chart datasets.',
                            allowedValues: '--',
                            defaultValue: '---'
                        }
                    ]
                }
            }
        ]">
            <template #previews>
                <div class="flex-1 grid grid-cols-12 gap-5">
                    <CCard class="col-span-12 md:col-span-6 lg:col-span-4">
                        <CPieChart title="Pie Chart" :labels="['Data #1', 'Data #2', 'Data #3']" :datasets="[
                            {
                                backgroundColor: [
                                    ChartColors.BLUE,
                                    ChartColors.EMERALD,
                                    ChartColors.RED
                                ],
                                data: [75, 35, 50],
                            }
                        ]" />
                    </CCard>
                    <CCard class="col-span-12 md:col-span-6 lg:col-span-4">
                        <CDoughnutChart title="Doughnut Chart" :labels="['Data #1', 'Data #2', 'Data #3']" :datasets="[
                            {
                                backgroundColor: [
                                    ChartColors.BLUE,
                                    ChartColors.EMERALD,
                                    ChartColors.RED
                                ],
                                data: [75, 35, 50],
                            }
                        ]" />
                    </CCard>
                    <CCard class="col-span-12 md:col-span-6 lg:col-span-4">
                        <CDoughnutChart title="Doughnut Chart" :labels="['Data #1', 'Data #2', 'Data #3']" :datasets="[
                            {
                                backgroundColor: [
                                    ChartColors.BLUE,
                                    ChartColors.EMERALD,
                                    ChartColors.RED
                                ],
                                data: [75, 35, 50],
                            },
                            {
                                backgroundColor: [
                                    ChartColors.SKY,
                                    ChartColors.GREEN,
                                    ChartColors.RED_DARK
                                ],
                                data: [25, 45, 20],
                            }
                        ]" />
                    </CCard>
                </div>
            </template>
        </CDocSection>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CLineChart',
                texts: [
                    'Line chart component.'
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'id',
                            type: 'string',
                            required: false,
                            desc: 'Chart id.',
                            allowedValues: '--',
                            defaultValue: '---'
                        },
                        {
                            name: 'title',
                            type: 'string',
                            required: false,
                            desc: 'Chart title.',
                            allowedValues: '--',
                            defaultValue: '---'
                        },
                        {
                            name: 'labels',
                            type: 'string[]',
                            required: true,
                            desc: 'Chart labels.',
                            allowedValues: '--',
                            defaultValue: '---'
                        },
                        {
                            name: 'datasets',
                            type: '{ backgroundColor?: ChartColor | ChartColor[], borderColor?: ChartColor, data: (number | Point)[]',
                            required: true,
                            desc: 'Chart datasets.',
                            allowedValues: '--',
                            defaultValue: '---'
                        }
                    ]
                }
            }
        ]">
            <template #previews>
                <div class="flex-1 flex justify-center">
                    <CCard class="w-full max-w-[725px]">
                        <CLineChart :labels="['JAN', 'FEB', 'MAR', 'APR', 'JUN']" :datasets="[
                            {
                                backgroundColor: ChartColors.BLUE,
                                borderColor: ChartColors.BLUE,
                                label: 'Data #1',
                                data: [25, 5, 10, 30, 10]
                            },
                            {
                                backgroundColor: ChartColors.EMERALD,
                                borderColor: ChartColors.EMERALD,
                                label: 'Data #2',
                                data: [5, 15, 20, 10, 15]
                            },
                            {
                                backgroundColor: ChartColors.RED,
                                borderColor: ChartColors.RED,
                                label: 'Data #3',
                                data: [45, 25, 10, 10, 25]
                            }
                        ]" />
                    </CCard>
                </div>
            </template>
        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CCard from '@/components/ui/CCard.vue';
import CBarChart from '@/components/ui/charts/CBarChart.vue';
import CDoughnutChart from '@/components/ui/charts/CDoughnutChart.vue';
import CLineChart from '@/components/ui/charts/CLineChart.vue';
import CPieChart from '@/components/ui/charts/CPieChart.vue';
import CPage from '@/components/ui/layout/CPage.vue';
import { ChartColors } from '@/types/components/ui/chart_type';

</script>

<style scoped></style>