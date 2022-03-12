<template>
    <Component :is="component" v-bind="attrs" :class="{'hover:opacity-70': !isHomePage}">
        <img src="/images/logo.png" alt="" role="presentation" width="200" height="42">
    </Component>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class LogoItem extends Vue {
    get isHomePage(): boolean {
        return this.$route.name === 'index';
    }

    get component(): 'span'|'NuxtLink' {
        return this.isHomePage ? 'span' : 'NuxtLink';
    }

    get attrs(): any {
        const attrs = {};

        if (this.component === 'NuxtLink') {
            Object.assign(attrs, {
                to: { name: 'index' },
                'aria-label': 'Главная страница'
            });
        }

        return attrs;
    }
}
</script>

