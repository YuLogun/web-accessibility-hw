<template>
    <label class="toggle">
        <input
            v-model="inputValue"
            :type="type"
            :value="fieldValue"
            v-bind="togglePropsCombined"
            class="toggle__input"
        >
        <Typograph :html="title" as="span" class="toggle__content" />
    </label>
</template>


<script lang="ts">
import { Component, Prop } from 'nuxt-property-decorator';
import FormField from '~/components/Form/FormField.vue';
import Typograph from '~/components/Typograph.vue';

@Component({
    components: { FormField, Typograph }
})
export default class ToggleField extends FormField {
    @Prop({ type: String, default: 'checkbox' })
    readonly type!: 'checkbox' | 'radio';

    @Prop({ type: String })
    readonly name!: string;

    /** Значение инпута с типом === 'radio' */
    @Prop({ type: [String, Number], default: null })
    readonly fieldValue!: string | number | null;

    get ariaProps(): {[x: string]: any} {
        const aria = {};
        let isChecked;

        if (this.type === 'radio') {
            isChecked = this.fieldValue === this.inputValue;
        } else {
            isChecked = Array.isArray(this.inputValue)
                ? this.inputValue.includes(this.fieldValue)
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
    @apply relative flex items-center justify-center;
    .toggle__content {
        @apply relative cursor-pointer rounded-lg py-4 px-8 transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-40;
    }
    .toggle__input {
        @apply absolute inset-0 opacity-0 pointer-events-none;
        &:checked +  .toggle__content {
            @apply bg-gray-500 cursor-default;
        }
        &:focus-visible +  .toggle__content {
            outline: 2px solid #5D16D5;
        }
    }
}
</style>
