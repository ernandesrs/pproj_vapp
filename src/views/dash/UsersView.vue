<template>
    <CPage :loading="loading" title="Users" without-header>

        <CPageSection uncontained with-grid>
            <div
                class="col-span-12 flex flex-col justify-center items-center gap-2.5 bg-violet-200 dark:bg-violet-400/45 cursor-default text-center p-12 md:p-20 mt-8">
                <h1 class="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Using DummyJSON
                </h1>

                <p class="text-lg lg:text-xl font-medium py-2.5">
                    Free Fake REST API for Placeholder JSON Data
                </p>

                <div>
                    <a href="https://dummyjson.com" target="_blank"
                        class="bg-violet-700 dark:bg-violet-800 hover:bg-violet-600 dark:hover:bg-violet-700 hover:shadow duration-300 text-white px-12 py-4 rounded-lg inline-block">Go
                        to DummyJSON</a>
                </div>
            </div>
        </CPageSection>

        <CPageSection with-grid>

            <CDialogConfirmation v-model="userDeletionObject.confirmationDialog"
                :title="userDeletionObject.confirmationDialogTitle" :text="userDeletionObject.confirmationDialogMessage"
                :on-confirm="{
                    callback: deleteUserConfirmed
                }" />

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
                },
                {
                    label: 'Actions'
                }
            ]">

                <CTableRow v-for="user in users">
                    <CTableColumn :value="user.name" />
                    <CTableColumn :value="user.username" />
                    <CTableColumn :value="user.email" />
                    <CTableColumn :value="user.dob" />
                    <CTableColumn>

                        <CButton @click="deleteUser(user)" color="danger" variant="text" icon="trash" />
                        <RouterLink :to="{ name: 'dash.users.info', params: { user_id: user.id } }">
                            <CButton color="info" variant="text" icon="pencil" class="pointer-events-none" />
                        </RouterLink>

                    </CTableColumn>
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

import CButton from '@/components/ui/CButton.vue';
import CDialogConfirmation from '@/components/ui/CDialogConfirmation.vue';
import CPagination from '@/components/ui/CPagination.vue';
import CPage from '@/components/ui/layout/CPage.vue';
import CPageSection from '@/components/ui/layout/CPageSection.vue';
import CTable from '@/components/ui/table/CTable.vue';
import CTableColumn from '@/components/ui/table/CTableColumn.vue';
import CTableRow from '@/components/ui/table/CTableRow.vue';
import { useApp } from '@/composables/useApp';
import { onMounted, ref } from 'vue';
import type { User as UserType } from '@/types/user_type';

const loading = ref<boolean>(true);

const totalItems = ref<number>(0);
const itemsPerPage = ref<number>(15);
const currentPage = ref<number>(1);

const userDeletionObject = ref<{
    confirmationDialog: boolean,
    confirmationDialogTitle: string,
    confirmationDialogMessage: string,
    user: UserType | null
}>({
    confirmationDialog: false,
    confirmationDialogTitle: 'Delete user?',
    confirmationDialogMessage: 'Once you confirm the deletion, it can no longer be undone.',
    user: null
});

const users = ref<Array<UserType>>([]);

const getUsers = async () => {
    loading.value = true;
    await fetch(`https://dummyjson.com/users?delay=5000&limit=${itemsPerPage.value}&skip=${currentPage.value}`).then(async (response) => {
        const r = await response.json();

        totalItems.value = r.total;
        users.value = r.users.map((item: any) => {
            return {
                id: item.id,
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

const deleteUser = (user: UserType) => {
    userDeletionObject.value.confirmationDialog = true;
    userDeletionObject.value.user = user;
};

const deleteUserConfirmed = async () => {
    if (!userDeletionObject.value.user) return;

    await fetch('https://dummyjson.com/users/' + userDeletionObject.value.user.id + '?delay=2500', {
        method: 'DELETE',
    }).then(() => {
        users.value = users.value.filter((user) => user.id != userDeletionObject.value.user?.id);

        useApp().addToast({
            type: 'success',
            message: 'Deleted!',
            caption: 'The user was successfully deleted.'
        });
    }).catch(() => {
        useApp().addToast({
            type: 'error',
            message: 'Fail on delete!',
            caption: 'Something unexpected happened while deleting user.'
        });
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