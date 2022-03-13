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
            <h2 class="mb-14">
                Вход
            </h2>
        </template>
        <form @submit.prevent="$emit('close')">
            <fieldset class="grid gap-14 lg:gap-10">
                <legend class="v-h">
                    Авторизация на сайте
                </legend>
                <InputField
                    :value.sync="login"
                    title="Логин"
                    placeholder="Введите логин"
                    class="text-3xl lg:text-lg"
                />
                <InputField
                    :value.sync="password"
                    type="password"
                    title="Пароль"
                    placeholder="Введите пароль"
                    class="text-3xl lg:text-lg"
                />
                <BaseButton type="submit" theme="gray-500" size="base">
                    Вход
                </BaseButton>
            </fieldset>
        </form>
    </BaseLayer>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator';
import BaseLayer from '~/components/layers/BaseLayer.vue';
import BaseButton from '~/components/BaseButton.vue';
import InputField from '~/components/form/InputField.vue';
import BaseIcon from '~/components/BaseIcon.vue';

@Component({
    components: { BaseIcon, InputField, BaseButton, BaseLayer },
    mounted(this: AuthLayer) {
        if (this.closeBtn) {
            (this.closeBtn.$el as HTMLButtonElement).focus();
        }
    }
})
export default class AuthLayer extends Vue {
    login = '';
    password = '';

    @Ref()
    readonly closeBtn!: InstanceType<typeof BaseButton>;
}
</script>
