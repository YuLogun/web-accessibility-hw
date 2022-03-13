<template>
    <div
        class="field"
        :class="{
            filled: !!value,
            focused: focus,
            error: !!error,
            'is-required': required,
            'is-disabled': disabled,
            'search': type === 'search'
        }"
    >
        <slot v-bind="inputProps"></slot>
        <template v-if="'append' in $slots">
            <span class="field__side field__append">
                <slot name="append"></slot>
            </span>
        </template>
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

<style lang="postcss">
.field {
    @apply relative rounded-lg flex bg-gray-50 before:block before:absolute before:-inset-px before:border before:border-gray-500 before:rounded-lg;
    .field__input {
        @apply relative w-full h-full bg-gray-50 rounded-lg py-3 px-5;
    }
    .field__side {
        @apply fill-current flex-shrink-0 flex items-center pr-4 pl-1;
    }
    .field__title {
        @apply absolute -top-7 text-lg;
    }
    &.focused {
        @apply before:border-purple-900;
        .field__input {
            outline: none;
        }
    }
    &.search {
       @apply rounded-3xl before:rounded-3xl;
        .field__input {
            @apply rounded-3xl px-4 py-3.5;
        }
    }
}
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
    display: none;
}
</style>
