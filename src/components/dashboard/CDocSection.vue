<template>
    <CPageSection with-grid v-for="section, index in props.data" :key="'doc_section_' + (index + 1)" class="lg:px-24">
        <component :is="section.tag" v-text="section.title" class="col-span-12 font-medium mb-4" :class="{
            'text-2xl sm:text-3xl lg:text-4xl': section.tag == 'h1',
            'text-xl sm:text-2xl lg:text-3xl': section.tag == 'h2',
        }"></component>
        <article class="col-span-12 text-lg">
            <p v-for="p, pIndex in section.texts" :key="'doc_section_p_' + (pIndex + 1)" v-html="p" class="mb-3"></p>
        </article>

        <!-- previews -->
        <div v-if="$slots.previews" class="col-span-12">
            <div class="px-5 py-3 bg-neutral-200 dark:bg-neutral-900 font-bold uppercase rounded-lg">
                Component previews
            </div>
            <div class="flex justify-center items-center flex-wrap gap-5 p-6">
                <slot name="previews" />
            </div>
        </div>

        <!-- slots -->
        <div v-if="section.componentDoc?.slots" class="col-span-12">
            <div class="px-5 py-3 bg-neutral-200 dark:bg-neutral-900 font-bold uppercase rounded-lg mb-2.5">
                Component slots
            </div>
            <div class="overflow-x-auto custom-scrollbar rounded-lg">
                <table class="w-full table table-auto text-left">
                    <thead class="bg-neutral-200 dark:bg-neutral-900">
                        <tr>
                            <th class="px-5 py-3 text-nowrap">Name</th>
                            <th class="px-5 py-3 text-nowrap min-w-[300px]">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="componentSlot, componentSlotIndex in section.componentDoc.slots"
                            :key="'component_props_table_row_' + (componentSlotIndex + 1)" :class="{
                                'bg-neutral-100 dark:bg-neutral-800': (componentSlotIndex + 1) % 2 != 0,
                                'bg-neutral-50 dark:bg-neutral-900': (componentSlotIndex + 1) % 2 == 0,
                            }">
                            <td class="px-5 py-2 text-nowrap" v-html="componentSlot.name"></td>
                            <td class="px-5 py-2" v-html="componentSlot.desc"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- properties -->
        <div v-if="section.componentDoc?.props" class="col-span-12">
            <div class="px-5 py-3 bg-neutral-200 dark:bg-neutral-900 font-bold uppercase rounded-lg mb-2.5">
                Component props
            </div>
            <div class="overflow-x-auto custom-scrollbar rounded-lg">
                <table class="w-full table table-auto text-left">
                    <thead class="bg-neutral-200 dark:bg-neutral-900">
                        <tr>
                            <th class="px-5 py-3 text-nowrap">Name</th>
                            <th class="px-5 py-3 text-nowrap">Type</th>
                            <th class="px-5 py-3 text-nowrap">Requirement</th>
                            <th class="px-5 py-3 text-nowrap min-w-[300px]">Description</th>
                            <th class="px-5 py-3 text-nowrap">Allowed values</th>
                            <th class="px-5 py-3 text-nowrap">Default value</th>
                        </tr>
                    </thead>
                    <tbody class="">
                        <tr v-for="componentProp, componentPropIndex in section.componentDoc.props"
                            :key="'component_props_table_row_' + (componentPropIndex + 1)" :class="{
                                'bg-neutral-100 dark:bg-neutral-800': (componentPropIndex + 1) % 2 != 0,
                                'bg-neutral-50 dark:bg-neutral-900': (componentPropIndex + 1) % 2 == 0,
                            }">
                            <td class="px-5 py-2 text-nowrap" v-html="componentProp.name"></td>
                            <td class="px-5 py-2" v-html="componentProp.type"></td>
                            <td class="px-5 py-2" v-html="componentProp.required ? 'Required' : 'Optional'"></td>
                            <td class="px-5 py-2" v-html="componentProp.desc"></td>
                            <td class="px-5 py-2" v-html="componentProp.allowedValues"></td>
                            <td class="px-5 py-2 text-nowrap" v-html="componentProp.defaultValue"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- events -->
        <div v-if="section.componentDoc?.events" class="col-span-12">
            <div class="px-5 py-3 bg-neutral-200 dark:bg-neutral-900 font-bold uppercase rounded-lg mb-2.5">
                Component events
            </div>
            <div class="overflow-x-auto custom-scrollbar rounded-lg">
                <table class="w-full table table-auto text-left">
                    <thead class="bg-neutral-200 dark:bg-neutral-900">
                        <tr>
                            <th class="px-5 py-3 text-nowrap">Name</th>
                            <th class="px-5 py-3 text-nowrap">Handler Signature</th>
                            <th class="px-5 py-3 text-nowrap min-w-[300px]">Description</th>
                        </tr>
                    </thead>
                    <tbody class="bg-neutral-100 dark:bg-neutral-800">
                        <tr v-for="componentEvent, componentEventIndex in section.componentDoc.events"
                            :key="'component_props_table_row_' + (componentEventIndex + 1)" :class="{
                                'bg-neutral-100 dark:bg-neutral-800': (componentEventIndex + 1) % 2 != 0,
                                'bg-neutral-50 dark:bg-neutral-900': (componentEventIndex + 1) % 2 == 0,
                            }">
                            <td class="px-5 py-2 text-nowrap" v-html="componentEvent.name"></td>
                            <td class="px-5 py-2 text-nowrap" v-html="componentEvent.handlerSignature"></td>
                            <td class="px-5 py-2" v-html="componentEvent.desc"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- codes -->
        <div v-if="$slots.codes" class="col-span-12">
            <div class="px-5 py-3 bg-neutral-200 dark:bg-neutral-900 font-bold uppercase rounded-lg mb-2.5">
                Preview codes
            </div>
            <div class="flex justify-center items-center flex-wrap gap-5 p-6 code-area">
                <slot name="codes" />
            </div>
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
            required?: boolean,
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
            handlerSignature: string,
            desc?: string
        }>
    }
};

const props = withDefaults(defineProps<{
    data: Array<Section>
}>(), {});

</script>

<style>
.code-area textarea {
    width: 100%;
    min-height: 175px;
    padding: 16px 10px;
    border: 1px solid rgb(106, 106, 107);
}
</style>