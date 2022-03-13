<template>
    <Component
        :is="componentName"
        v-bind="componentAttrs"
        class="button"
        :class="{
            [`button_theme_${theme}`]: theme,
            [`button_size_${size}`]: size
        }"
        v-on="$listeners"
    >
        <span class="button__content">
            <slot></slot>
        </span>
    </Component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class BaseButton extends Vue {
    @Prop({ type: [String, Object], required: false })
    readonly href?: string|Location|undefined;

    /** Тип кнопки */
    @Prop({ type: String, default: 'button' })
    readonly type!: 'button'|'submit';

    @Prop({ type: Boolean, default: false })
    readonly disabled!: boolean;

    @Prop({ type: String, required: false })
    readonly theme?: string;

    @Prop({ type: String, required: false })
    readonly size?: string;

    /** Определить тип компонента */
    get componentName(): string {
        if (typeof this.href === 'object' || (typeof this.href === 'string' && /^\//.test(this.href))) {
            return 'NuxtLink';
        } else if (typeof this.href === 'string' && !/^\//.test(this.href)) {
            return 'a';
        }

        return 'button';
    }

    /** Собрать аттрибуты компонента */
    get componentAttrs(): {[x: string]: string|boolean|Location|undefined} {
        const attrs = {
            disabled: this.disabled
        };

        if (this.componentName === 'button') {
            Object.assign(attrs, {
                type: this.type
            });
        } else if (this.componentName === 'NuxtLink') {
            Object.assign(attrs, {
                to: this.href
            });
        } else if (this.componentName === 'a') {
            Object.assign(attrs, {
                href: this.href,
                target: '_blank'
            });
        }

        return attrs;
    }

}
</script>

<style lang="postcss">
.button_theme_gray-500 {
    @apply bg-gray-500 hover:bg-gray-600;
}
.button_theme_purple-900 {
    @apply bg-purple-900 text-white hover:bg-purple-700;
    &:focus-visible {
        outline: 2px solid #121212;
    }
}
.button_size_base {
    @apply py-3.5 px-5 rounded-lg text-3xl lg:text-xl sm:text-base sm:py-1 sm:px-2;
}
.button_size_medium {
    @apply py-1.5 px-3 text-xl rounded lg:text-lg sm:text-base sm:py-1 sm:px-2;
}
.button_size_xmedium {
    @apply py-2 px-4 text-xl rounded-lg sm:py-1 sm:px-2;
}
</style>
