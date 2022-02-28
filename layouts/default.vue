<template>
    <div class="flex flex-col min-h-screen">
        <TheHeader />
        <Nuxt />
        <TheFooter />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TheHeader from '~/components/TheHeader.vue';
import TheFooter from '~/components/TheFooter.vue';

@Component({
    components: {
        TheHeader,
        TheFooter
    }
})
export default class DefaultLayout extends Vue {}
</script>

