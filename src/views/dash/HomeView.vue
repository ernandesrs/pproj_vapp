<template>
    <CPage title="Dashboard overview" without-header :loading="loading">
        <CPageSection with-grid>

            <CCard class="col-span-6">
                <div class="h-[250px]">
                    <CLineChart :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May']" :datasets="[
                        {
                            label: 'Line #1',
                            data: [10, 20, 15, 10, 25],
                            backgroundColor: ChartColors.RED,
                            borderColor: ChartColors.RED,
                        },
                        {
                            label: 'Line #2',
                            data: [5, 25, 5, 5, 75],
                            backgroundColor: ChartColors.GREEN,
                            borderColor: ChartColors.GREEN
                        }
                    ]" />
                </div>
            </CCard>

            <CCard class="col-span-6">
                <div class="flex justify-center">
                    <CBarChart :labels="chartLabels" :datasets="chartDataSets" />
                </div>
            </CCard>

            <CCard class="col-span-12 sm:col-span-6">
                <div class="flex justify-center h-[225px]">
                    <CPieChart :labels="['JAN', 'FEB', 'MAR']" :datasets="[
                        {
                            data: [100, 50, 175],
                            backgroundColor: [
                                ChartColors.GREEN,
                                ChartColors.EMERALD,
                                ChartColors.LIME,
                            ]
                        }
                    ]" />
                </div>
            </CCard>

            <CCard class="col-span-12 sm:col-span-6">
                <CSkeletonText v-if="loading" :lines="3" line-height="h-2" line-gap="gap-4" />

                <div v-else>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor accusantium exercitationem
                    suscipit
                    possimus tempora quia, laudantium non voluptate culpa consequatur vero blanditiis. Aut aspernatur ex
                    magnam, quasi velit cupiditate?
                </div>
            </CCard>

            <CCard class="col-span-12 sm:col-span-6" global-loading>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor accusantium exercitationem suscipit
                possimus tempora quia, laudantium non voluptate culpa consequatur vero blanditiis. Aut aspernatur ex
                magnam, quasi velit cupiditate?
            </CCard>

            <CCard class="col-span-12 sm:col-span-6" global-loading>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor accusantium exercitationem suscipit
                possimus tempora quia, laudantium non voluptate culpa consequatur vero blanditiis. Aut aspernatur ex
                magnam, quasi velit cupiditate?
            </CCard>

            <CCard class="col-span-12" title="Lorem title" minimizable global-loading>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor accusantium exercitationem suscipit
                possimus tempora quia, laudantium non voluptate culpa consequatur vero blanditiis. Aut aspernatur ex
                magnam, quasi velit cupiditate?
            </CCard>

        </CPageSection>
    </CPage>
</template>

<script setup lang="ts">

import CPage from '@/components/ui/layout/CPage.vue';
import CPageSection from '@/components/ui/layout/CPageSection.vue';
import CCard from '@/components/ui/CCard.vue';
import { onMounted, ref } from 'vue';
import CSkeletonText from '@/components/ui/CSkeletonText.vue';
import CBarChart from '@/components/ui/charts/CBarChart.vue';
import { ChartColors, type BarChartDataSet } from '@/types/components/ui/chart_type';
import { getRandomIntBetween } from '@/utils/functions';
import CPieChart from '@/components/ui/charts/CPieChart.vue';
import CLineChart from '@/components/ui/charts/CLineChart.vue';

const loading = ref<boolean>(true);

const chartDataSets = ref<Array<BarChartDataSet>>([
    {
        label: 'Data #1',
        data: [25, 10, 50, 60],
        backgroundColor: ChartColors.BLUE
    },
    {
        label: 'Data #2',
        data: [215, 110, 250, 160],
        backgroundColor: ChartColors.SKY
    },
    {
        label: 'Data #3',
        data: [251, 110, 50, 260],
        backgroundColor: ChartColors.VIOLET
    }
]);

const chartLabels = ['Jan', 'Feb', 'Mar', 'Apr'];
const fillChartDataSets = (): void => {
    chartDataSets.value = chartDataSets.value.map((value: any, index: number) => {
        return {
            ...value,
            data: [
                getRandomIntBetween(5, 200),
                getRandomIntBetween(5, 200),
                getRandomIntBetween(5, 200),
                getRandomIntBetween(5, 200),
            ]
        };
    });
};

onMounted(() => {

    setInterval(() => {
        fillChartDataSets();
    }, 10000);

    setTimeout(() => {
        loading.value = false;
    }, 5000);

});

</script>

<style scoped></style>