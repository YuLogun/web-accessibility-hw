<template>
    <label
        class="toggle"
        :class="{
            [`toggle_view_${view}`]: view
        }"
    >
        <input
            v-model="inputValue"
            :type="type"
            :value="fieldValue"
            v-bind="togglePropsCombined"
            class="toggle__input"
        >
        <span v-if="view === 'check'" aria-hidden="true" class="toggle__fake">
            <span class="toggle__mark">
                <BaseIcon name="check" width="22" height="22" />
            </span>
        </span>
        <Typograph v-if="title" :html="title" as="span" class="toggle__content" />
    </label>
</template>


<script lang="ts">
import { Component, Prop } from 'nuxt-property-decorator';
import FormField from '~/components/form/FormField.vue';
import Typograph from '~/components/Typograph.vue';
import BaseIcon from '~/components/BaseIcon.vue';

@Component({
    components: { BaseIcon, FormField, Typograph }
})
export default class ToggleField extends FormField {
    @Prop({ type: String, default: 'checkbox' })
    readonly type!: 'checkbox' | 'radio';

    @Prop({ type: String, default: 'base' })
    readonly view?: string;

    @Prop({ type: String })
    readonly name!: string;

    @Prop({ type: [String, Number, Boolean], default: null })
    readonly fieldValue!: string | number | boolean | null;

    get ariaProps(): {[x: string]: any} {
        const aria = {};
        let isChecked;

        if (this.type === 'radio') {
            isChecked = this.fieldValue === this.inputValue;
        } else {
            isChecked = Array.isArray(this.inputValue)
                ? this.inputValue.includes(this.fieldValue)
                : typeof this.inputValue === 'boolean'
                    ? this.inputValue
                    : this.fieldValue === this.inputValue;
        }

        Object.assign(aria, {
            'aria-checked': isChecked.toString()
        });

        if (this.error) {
            Object.assign(aria, {
                'aria-describedby': this.errorId,
                'aria-invalid': true
            });
        }

        return aria;
    }

    get togglePropsCombined(): {[x: string]: string|number|boolean|null} {
        return {
            ...this.inputProps,
            ...this.ariaProps,
            name: this.name
        };
    }
}
</script>

<style lang="postcss">
.toggle {
    @apply relative flex items-center;
    .toggle__content {
        @apply relative cursor-pointer transition-main;
    }
    .toggle__fake {
        @apply flex-shrink-0 w-[24px] h-[24px] rounded cursor-pointer flex items-center justify-center bg-white relative before:block before:absolute before:inset-0 before:border before:border-black-900 before:rounded;
    }
    .toggle__mark {
        @apply transition-main opacity-0 text-white fill-current;
    }
    .toggle__input {
        @apply absolute inset-0 opacity-0 pointer-events-none;
        &:checked +  .toggle__content {
            @apply bg-gray-500;
        }
        &:checked +  .toggle__fake {
            @apply bg-purple-900 cursor-default before:border-purple-900;
            .toggle__mark {
                @apply opacity-100;
            }
        }
        &:focus-visible ~ .toggle__content {
            outline: 2px solid #5D16D5;
        }
    }
}
.toggle_view_base {
    @apply justify-center;
    .toggle__content {
        @apply rounded-lg py-4 px-8 hover:bg-gray-500 hover:bg-opacity-40;
    }
}
.toggle_view_check {
    @apply -mx-1 hover:opacity-70;
    .toggle {
        &__content {
            @apply mx-1;
        }
        &__fake {
            @apply mx-1;
        }
    }
}
@screen lg {
    .toggle_view_base {
        .toggle__content {
            @apply py-2 px-4;
        }
    }
}
</style>
