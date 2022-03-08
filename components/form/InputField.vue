<template>
    <FormField
        v-bind="$props"
        :focus="isFocus"
    >
        <input
            ref="inputElement"
            v-model="inputValue"
            class="field__input"
            v-bind="inputPropsCombined"
            :aria-describedby="errorId"
            :aria-invalid="!!error"
            v-on="inputListeners"
            @focus="onFocus"
            @blur="onBlur"
        >
    </FormField>
</template>

<script lang="ts">
import { Component, Prop, Ref } from 'nuxt-property-decorator';
import FormField from '~/components/form/FormField.vue';

@Component({
    components: { FormField }
})
export default class InputField extends FormField {
    @Prop({ type: String, default: 'text' })
    readonly type!: string;

    @Prop({ type: String, default: null })
    readonly autocomplete!: string|null;

    @Prop({ type: String, default: null })
    readonly inputmode!: string|null;

    @Prop({ type: Number, default: null })
    readonly maxlength!: number|null;

    get inputPropsCombined(): {[x: string]: string|number|boolean|null} {
        return {
            ...this.inputProps,
            autocomplete: this.autocomplete,
            maxlength: this.maxlength,
            inputmode: this.inputmode
        };
    }

    @Ref()
    readonly inputElement!: HTMLInputElement;
}
</script>
