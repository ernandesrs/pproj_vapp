<template>
    <CPage title="Dashboard overview" without-header :loading="loading">
        <CPageSection with-grid>

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

            <CCard class="col-span-12 sm:col-span-6" title="Lorem title" minimizable global-loading>
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

const loading = ref<boolean>(true);

onMounted(() => {

    setTimeout(() => {
        loading.value = false;
    }, 5000);

});

</script>

<style scoped></style>