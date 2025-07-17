<template>
    <CPage :loading="loading" title="Users">

        <CPageSection with-grid>

            <CTable class="col-span-12" :loading="loading" :lines-when-loading="itemsPerPage" :header="[
                {
                    label: 'Name'
                },
                {
                    label: 'Username'
                },
                {
                    label: 'email'
                },
                {
                    label: 'DoB'
                }
            ]">

                <CTableRow v-for="user in users">
                    <CTableColumn :value="user.name" />
                    <CTableColumn :value="user.username" />
                    <CTableColumn :value="user.email" />
                    <CTableColumn :value="user.dob" />
                </CTableRow>

            </CTable>

            <div class="col-span-12 flex justify-center">
                <CPagination @change-page="changePage" :total-items="totalItems" :items-per-page="itemsPerPage"
                    :current-page="currentPage" />
            </div>

        </CPageSection>

    </CPage>
</template>

<script setup lang="ts">

import CPagination from '@/components/ui/CPagination.vue';
import CPage from '@/components/ui/layout/CPage.vue';
import CPageSection from '@/components/ui/layout/CPageSection.vue';
import CTable from '@/components/ui/table/CTable.vue';
import CTableColumn from '@/components/ui/table/CTableColumn.vue';
import CTableRow from '@/components/ui/table/CTableRow.vue';
import { onMounted, ref } from 'vue';

const loading = ref<boolean>(true);

const totalItems = ref<number>(0);
const itemsPerPage = ref<number>(15);
const currentPage = ref<number>(1);

const users = ref<Array<{
    name: string,
    username: string,
    email: string,
    dob: string
}>>([]);

const getUsers = async () => {
    loading.value = true;
    await fetch(`https://dummyjson.com/users?delay=5000&limit=${itemsPerPage.value}&skip=${currentPage.value}`).then(async (response) => {
        const r = await response.json();

        totalItems.value = r.total;
        users.value = r.users.map((item: any) => {
            return {
                name: item.firstName + ' ' + item.lastName,
                username: item.username,
                email: item.email,
                dob: item.birthDate
            };
        });
    }).finally(() => {
        loading.value = false;
    });
};

const changePage = (page: number): void => {
    currentPage.value = page;
    getUsers();
};

onMounted(() => {

    getUsers();

});

</script>

<style scoped></style>