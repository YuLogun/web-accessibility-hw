<template>
    <article :aria-label="title">
        <img :src="image" alt="" role="presentation" class="mb-6 w-full">
        <Typograph as="h3" :html="title" class="mb-4" />
        <Typograph v-if="subTitle" :html="subTitle" class="text-xl" />
        <slot></slot>
    </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import Typograph from '~/components/Typograph.vue';

@Component({
    components: { Typograph }
})
export default class CardItem extends Vue {
    @Prop({ type: String, required: true })
    readonly image!: string;

    @Prop({ type: String, required: true })
    readonly title!: string;

    @Prop({ type: String, required: false, default: '' })
    readonly subTitle?: string;

    @Prop({ type: String, required: false })
    readonly alt!: string;
}
</script>
