<template>
    <i :class="'inline-block bi bi-' + props.name + (props.prepend ? ' mr-2.5' : (props.append ? ' ml-2.5' : ' '))"></i>
</template>

<script setup lang="ts">

import type { IconProps } from '@/types/components/ui/icon_type';

const props = withDefaults(defineProps<IconProps>(), {
    name: 'app',
    prepend: false,
    append: false,
});

</script>

<style scoped></style>