<template>
    <main class="flex-1 container pt-8 pb-32 lg:pb-24">
        <section aria-describedby="first_section_title">
            <h1 id="first_section_title" tabindex="-1" autofocus>
                Купить билет в музей
            </h1>
        </section>
    </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
    head(this: PurchaseTicketPage) {
        return {
            title: 'Покупка билета'
        };
    }
})
export default class PurchaseTicketPage extends Vue {}
</script>
