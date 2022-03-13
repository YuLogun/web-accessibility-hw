<template>
    <BaseLayer>
        <template #close>
            <BaseButton ref="closeBtn" aria-label="Закрыть модальное окно" @click.prevent="$emit('close')">
                <span class="flex items-center justify-center rounded-lg p-4 border border-gray-500 hover:bg-gray-500">
                    <BaseIcon name="cross" width="16" height="16" />
                </span>
            </BaseButton>
        </template>
        <template #header>
            <h2 class="v-h">
                Боковая панель
            </h2>
        </template>
        <div class="grid gap-y-8 pt-8">
            <form role="search" class="flex-auto" @submit.prevent="">
                <InputField type="search" aria-label="Поиск по сайту" title="Поиск по сайту">
                    <template #append>
                        <span class="pb-1">
                            <BaseIcon name="search" width="19" height="19" />
                        </span>
                    </template>
                </InputField>
                <InputField type="submit" value="Поиск" class="v-h" />
            </form>
            <LocaleSwitcher />
            <BaseButton theme="gray-500" size="base" @click.prevent="$layer.open('AuthLayer')">
                Войти
            </BaseButton>
        </div>
    </BaseLayer>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator';
import BaseLayer from '~/components/layers/BaseLayer.vue';
import BaseButton from '~/components/BaseButton.vue';
import InputField from '~/components/form/InputField.vue';
import BaseIcon from '~/components/BaseIcon.vue';
import LocaleSwitcher from '~/components/LocaleSwitcher.vue';

@Component({
    components: { BaseIcon, InputField, BaseButton, BaseLayer, LocaleSwitcher },
    mounted(this: BurgerLayer) {
        if (this.closeBtn) {
            (this.closeBtn.$el as HTMLButtonElement).focus();
        }
    }
})
export default class BurgerLayer extends Vue {
    @Ref()
    readonly closeBtn!: InstanceType<typeof BaseButton>;
}
</script>
