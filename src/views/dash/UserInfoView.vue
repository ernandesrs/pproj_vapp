<template>
    <CPage :loading="loading" title="User Info">
        <CPageSection with-grid>
            <CCard class="col-span-12">


                <div class="grid grid-cols-12 gap-3">
                    <div class="col-span-12 flex flex-col items-center mb-3">
                        <CSkeleton v-if="loading" variant="circle" width="w-36" height="h-36" />
                        <CThumbnail v-else :image="user?.image" :text="(user?.name as string ?? '')" size="xl" square
                            circle />
                    </div>

                    <CLabeledValue class="col-span-6" label="Name" :value="user?.name" :loading="loading" />
                    <CLabeledValue class="col-span-6" label="Username" :value="user?.username" :loading="loading" />

                    <CLabeledValue class="col-span-6" label="E-mail" :value="user?.email" :loading="loading" />
                    <CLabeledValue class="col-span-6" label="DoB" :value="user?.dob" :loading="loading">
                        <template #prepend>
                            <CTooltip width="w-[145px]">
                                <CIcon name="info-circle" />
                                <template #tooltip>
                                    <div class="flex flex-col items-center gap-2.5">
                                        <CIcon name="cake2-fill" class="text-2xl" />
                                        <p>User's birth day.</p>
                                    </div>
                                </template>
                            </CTooltip>
                        </template>
                    </CLabeledValue>
                </div>

            </CCard>

        </CPageSection>
    </CPage>
</template>

<script setup lang="ts">

import CCard from '@/components/ui/CCard.vue';
import CIcon from '@/components/ui/CIcon.vue';
import CLabeledValue from '@/components/ui/CLabeledValue.vue';
import CSkeleton from '@/components/ui/CSkeleton.vue';
import CThumbnail from '@/components/ui/CThumbnail.vue';
import CTooltip from '@/components/ui/CTooltip.vue';
import CPage from '@/components/ui/layout/CPage.vue';
import CPageSection from '@/components/ui/layout/CPageSection.vue';
import { useApp } from '@/composables/useApp';
import type { User } from '@/types/user_type';
import { nextTick, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const loading = ref<boolean>(true);

const userId = ref<string | null>(null);
const user = ref<User | null>(null);

const getUser = async (): Promise<null | User> => {
    loading.value = true;

    if (!userId.value) return null;

    try {
        const r = await fetch('https://dummyjson.com/users/' + userId.value + '?delay=2500', { method: 'get' }).then(res => res.json());

        return {
            id: r.id,
            name: r.firstName + ' ' + r.lastName,
            username: r.username,
            dob: r.birthDate,
            email: r.email,
            image: r.image,
            original: r
        } as User;
    } catch {
        return null;
    } finally {
        loading.value = false;
    }
};

onMounted(async () => {
    userId.value = route.params.user_id as string;

    await nextTick();

    user.value = await getUser();

    if (!user.value) {
        useApp().addToast({
            type: 'error',
            message: 'Notfound',
            caption: 'The user is deleted or not exists.'
        });
        router.replace({ name: 'dash.users' });
    }
});

</script>

<style scoped></style>