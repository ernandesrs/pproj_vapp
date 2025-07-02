<template>
    <CPage title="Thumbnails" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CThumbnail',
                texts: [
                    'Thumbnail component.'
                ],
                componentDoc: {
                }
            }
        ]">

            <template #previews>
                <div class="w-full flex flex-wrap justify-center items-center gap-5">

                    <div>
                        <CThumbnail image="https://picsum.photos/id/69/800/600" text="Lorem dolor" size="sm" />
                        <span class="inline-block text-xs text-center mt-1.5 w-full text-zinc-400">Small</span>
                    </div>
                    <div>
                        <CThumbnail image="https://picsum.photos/id/69/800/600" text="Lorem dolor" size="md" />
                        <span class="inline-block text-xs text-center mt-1.5 w-full text-zinc-400">Medium</span>
                    </div>
                    <div>
                        <CThumbnail image="https://picsum.photos/id/69/800/600" text="Lorem dolor" size="normal" />
                        <span class="inline-block text-xs text-center mt-1.5 w-full text-zinc-400">Normal</span>
                    </div>
                    <div>
                        <CThumbnail image="https://picsum.photos/id/69/800/600" text="Lorem dolor" size="lg" />
                        <span class="inline-block text-xs text-center mt-1.5 w-full text-zinc-400">Large</span>
                    </div>
                    <div>
                        <CThumbnail image="https://picsum.photos/id/69/800/600" text="Lorem dolor" size="xl" />
                        <span class="inline-block text-xs text-center mt-1.5 w-full text-zinc-400">Extra large</span>
                    </div>
                </div>

                <div class="w-full flex flex-wrap justify-center items-center gap-5">
                    <div>
                        <CThumbnail image="https://picsum.photos/id/69/800/600" text="Lorem dolor" square size="sm" />
                        <span class="inline-block text-xs text-center mt-1.5 w-full text-zinc-400">small</span>
                    </div>
                    <div>
                        <CThumbnail image="https://picsum.photos/id/69/800/600" text="Lorem dolor" square size="md" />
                        <span class="inline-block text-xs text-center mt-1.5 w-full text-zinc-400">medium</span>
                    </div>
                    <div>
                        <CThumbnail image="https://picsum.photos/id/69/800/600" text="Lorem dolor" square
                            size="normal" />
                        <span class="inline-block text-xs text-center mt-1.5 w-full text-zinc-400">normal</span>
                    </div>
                    <div>
                        <CThumbnail image="https://picsum.photos/id/69/800/600" text="Lorem dolor" square size="lg" />
                        <span class="inline-block text-xs text-center mt-1.5 w-full text-zinc-400">large</span>
                    </div>
                    <div>
                        <CThumbnail image="https://picsum.photos/id/69/800/600" text="Lorem dolor" square size="xl" />
                        <span class="inline-block text-xs text-center mt-1.5 w-full text-zinc-400">extra
                            large</span>
                    </div>

                </div>

                <div>
                    <CThumbnail text="Lorem dolor" square circle />
                    <span class="inline-block text-xs text-center mt-1.5 w-full text-zinc-400" si>Only text</span>
                </div>

                <div>
                    <CThumbnail image="https://picsum.photos/id/65/300/300" text="May Parker" size="normal" square
                        circle />
                    <span class="inline-block text-xs text-center mt-1.5 w-full text-zinc-400">circle</span>
                </div>

                <div>
                    <CThumbnail text="May Parker" size="normal" square
                        circle loading />
                    <span class="inline-block text-xs text-center mt-1.5 w-full text-zinc-400">circle</span>
                </div>

            </template>

            <template #codes>
                <textarea>
                </textarea>
            </template>

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/dashboard/CPage.vue';
import CThumbnail from '@/components/ui/CThumbnail.vue';

</script>

<style scoped></style>