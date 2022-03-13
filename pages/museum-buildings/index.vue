<template>
    <main class="flex-1 container pt-8 pb-32 lg:pb-24">
        <section aria-describedby="first_section_title">
            <h1 id="first_section_title" tabindex="-1" autofocus>
                Страница о зданиях музей
            </h1>
        </section>
    </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
    head(this: MuseumBuildingPage) {
        return {
            title: 'Здания музея'
        };
    }
})
export default class MuseumBuildingPage extends Vue {}
</script>
