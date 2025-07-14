<template>
    <CPage :loading="loading" title="Users">

        <CPageSection>

            <CTable :loading="loading" :lines-when-loading="listItems" :header="[
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

        </CPageSection>

    </CPage>
</template>

<script setup lang="ts">

import CPage from '@/components/ui/layout/CPage.vue';
import CPageSection from '@/components/ui/layout/CPageSection.vue';
import CTable from '@/components/ui/table/CTable.vue';
import CTableColumn from '@/components/ui/table/CTableColumn.vue';
import CTableRow from '@/components/ui/table/CTableRow.vue';
import { onMounted, ref } from 'vue';

const loading = ref<boolean>(true);

const listItems = 15;

const users = ref<Array<{
    name: string,
    username: string,
    email: string,
    dob: string
}>>([]);

const getUsers = async () => {
    await fetch('https://dummyjson.com/users?limit=' + listItems + '&delay=5000', {}).then(async (response) => {
        const r = await response.json();

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

onMounted(() => {

    getUsers();

});

</script>

<style scoped></style>