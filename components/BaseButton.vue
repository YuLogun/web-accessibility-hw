<template>
    <Component
        :is="componentName"
        v-bind="componentAttrs"
        v-on="$listeners"
    >
        <span>
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
