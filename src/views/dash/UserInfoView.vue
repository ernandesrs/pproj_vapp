<template>
    <CPage :loading="loading" title="User Info">
        <CPageSection with-grid>
            <div class="col-span-12">
                {{ user }}
            </div>
        </CPageSection>
    </CPage>
</template>

<script setup lang="ts">

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
            photo: r.image,
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