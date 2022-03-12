<template>
    <nav aria-labelledby="locale_switcher_title" class="locale-switcher">
        <div class="locale-switcher__container">
            <span id="locale_switcher_title" class="v-h" aria-hidden="true">Шапка выбор языка</span>
            <a class="locale-switcher__locale locale-switcher__locale_active" aria-label="Русский">RU</a>
            <a class="locale-switcher__locale" href="/en" hreflang="en" aria-label="Switch to English">EN</a>
        </div>
    </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class LocaleSwitcher extends Vue {
}
</script>

<style lang="postcss">
.locale-switcher {
    &__container {
        @apply flex items-center -mx-1;
    }
    &__locale {
        @apply flex items-center justify-center w-16 h-[3.25rem] rounded text-xl hover:bg-gray-500 hover:bg-opacity-50 mx-1;
    }
}
.locale-switcher__locale_active {
    @apply bg-gray-500 pointer-events-none mx-1;
}
</style>
