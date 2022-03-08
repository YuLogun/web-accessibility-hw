<template>
    <div
        class="field"
        :class="{
            filled: !!value,
            focused: focus,
            error: !!error,
            'is-required': required,
            'is-disabled': disabled,
        }"
    >
        <slot v-bind="inputProps"></slot>
        <slot name="title">
            <label :for="id" class="field__title">
                {{ title }}
            </label>
        </slot>
        <span v-if="error" :id="errorId" class="field__error" aria-live="polite">
            {{ error }}
        </span>
    </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import FormFieldMixin from '~/mixins/formFieldMixin';
import { generateUuid } from '~/plugins/uuid';

@Component({})
export default class BaseFormField extends mixins(FormFieldMixin) {
    errorId = generateUuid('form-field-error-');
}
</script>
