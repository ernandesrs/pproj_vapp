<template>
    <CPageSection with-grid v-for="section, index in props.data" :key="'doc_section_' + (index + 1)" class="lg:px-24">
        <component :is="section.tag" v-text="section.title" class="col-span-12 font-medium mb-4" :class="{
            'text-2xl sm:text-3xl lg:text-4xl': section.tag == 'h1',
            'text-xl sm:text-2xl lg:text-3xl': section.tag == 'h2',
        }"></component>
        <article class="col-span-12 text-lg">
            <p v-for="p, pIndex in section.texts" :key="'doc_section_p_' + (pIndex + 1)" v-html="p" class="mb-3"></p>
        </article>

        <div v-if="section.componentDoc"
            class="col-span-12 overflow-x-auto custom-scrollbar mt-8 border border-neutral-300 dark:border-neutral-700">
            <table class="w-full table table-auto text-left">
                <thead class="bg-neutral-200 dark:bg-neutral-900">
                    <tr>
                        <th class="px-5 py-3 text-nowrap">Name</th>
                        <th class="px-5 py-3 text-nowrap">Type</th>
                        <th class="px-5 py-3 text-nowrap min-w-[300px]">Description</th>
                        <th class="px-5 py-3 text-nowrap">Allowed values</th>
                        <th class="px-5 py-3 text-nowrap">Default value</th>
                    </tr>
                </thead>
                <tbody class="bg-neutral-100 dark:bg-neutral-800">
                    <tr v-for="componentProp, componentPropIndex in section.componentDoc.props"
                        :key="'component_props_table_row_' + (componentPropIndex + 1)">
                        <td class="px-5 py-2 text-nowrap" v-html="componentProp.name"></td>
                        <td class="px-5 py-2 text-nowrap" v-html="componentProp.type"></td>
                        <td class="px-5 py-2" v-html="componentProp.desc"></td>
                        <td class="px-5 py-2 text-nowrap" v-html="componentProp.allowedValues"></td>
                        <td class="px-5 py-2 text-nowrap" v-html="componentProp.defaultValue"></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </CPageSection>
</template>

<script setup lang="ts">

import CPageSection from './CPageSection.vue';

interface Section {
    tag: "h1" | "h2",
    title: string,
    texts?: Array<string>,
    componentDoc?: {
        props?: Array<{
            name: string,
            type: string,
            desc?: string,
            allowedValues?: string,
            defaultValue?: string
        }>,
        slots?: Array<{
            name: string,
            desc?: string
        }>,
        events?: Array<{
            name: string,
            signature: string,
            description?: string
        }>
    }
};

const props = withDefaults(defineProps<{
    data: Array<Section>
}>(), {});

</script>

<style scoped></style>