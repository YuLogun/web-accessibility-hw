<template>
    <SvgIcon :class="['svg-icon', 'svg-icon_' + name]" :name="name" v-bind="$attrs" focusable="false" aria-hidden="true" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component({
    inheritAttrs: false
})
export default class BaseIcon extends Vue {
    @Prop({ type: String, required: true })
    readonly name!: string;
}
</script>
