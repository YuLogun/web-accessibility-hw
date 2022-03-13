<template>
    <div class="layer">
        <div class="layer-container layer__container">
            <template v-if="'close' in $slots">
                <div class="layer__close">
                    <slot name="close"></slot>
                </div>
            </template>

            <div class="layer__inner">
                <template v-if="'header' in $slots">
                    <div class="layer__header">
                        <slot name="header"></slot>
                    </div>
                </template>
                <div class="layer__content">
                    <slot></slot>
                </div>
                <template v-if="'bottom' in $slots">
                    <div class="layer__footer">
                        <slot name="bottom"></slot>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
})
export default class ConfirmLayer extends Vue {
}
</script>

<style scoped lang="postcss">
.layer {
    &__container {
        @apply relative bg-white rounded-lg max-w-[792px] w-full;
        padding: 70px 153px;
    }
    &__close {
        @apply absolute top-6 right-6;
    }
    &__inner {
        @apply relative;
    }
}
</style>
