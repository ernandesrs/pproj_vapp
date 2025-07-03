<template>
    <CTableRow scope="colgroup">
        <CTableColumn class="text-left" :colspan="props.colspan" th>
            <CIcon class="text-xs" name="chevron-double-right" prepend /> {{ props.label }}
        </CTableColumn>
    </CTableRow>
    <slot />
</template>

<script setup lang="ts">

import type { TableGroupProps } from '@/types/components/ui/table_type';
import CTableRow from './CTableRow.vue';
import CTableColumn from './CTableColumn.vue';
import CIcon from '../CIcon.vue';

const props = withDefaults(defineProps<TableGroupProps>(), {});

</script>

<style scoped></style>