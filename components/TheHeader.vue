<template>
    <header class="py-9 lg:py-6">
        <div class="relative container">
            <div class="flex items-center justify-between mb-8">
                <BaseButton
                    class="absolute -top-40 transition-fast focus:top-5"
                    href="#section_exhibitions_events"
                    theme="gray-500"
                    size="medium"
                    target="_self"
                >
                    Перейти к основному контенту
                </BaseButton>

                <LogoItem class="flex-shrink-0" />

                <button type="button" aria-label="Открыть боковую панель" class="a-lg:hidden" @click.prevent="$layer.open('BurgerLayer')">
                    <span aria-hidden="true" class="flex items-center justify-center rounded-lg p-3 border border-gray-500">
                        <BaseIcon name="burger-toggle" width="16" height="16" />
                    </span>
                </button>

                <div class="flex-auto ml-4 flex items-center justify-end -mx-2 lg:hidden">
                    <form role="search" class="flex-auto max-w-[295px] mx-2" @submit.prevent="">
                        <InputField type="search" aria-label="Поиск по сайту">
                            <template #append>
                                <span class="pb-1">
                                    <BaseIcon name="search" width="19" height="19" />
                                </span>
                            </template>
                        </InputField>
                        <InputField type="submit" value="Поиск" class="v-h" />
                    </form>
                    <LocaleSwitcher class="mx-2 ml-4" />
                    <div class="mx-2 ml-8">
                        <button aria-label="Войти" class="hover:opacity-70" type="button" @click.prevent="$layer.open('AuthLayer')">
                            <span class="fill-current text-black transition-main hover:text-purple-900">
                                <BaseIcon aria-hidden="true" name="user" width="46" height="46" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav aria-labelledby="main_header_navigation_title">
                <span id="main_header_navigation_title" class="v-h" aria-hidden="true">Главная</span>
                <ul class="flex flex-wrap items-center -mx-5 lg:-mx-3" role="list">
                    <li v-for="navItem in navItems" :key="navItem.id" class="mx-5 lg:mx-3">
                        <NuxtLink :to="{name: 'purchase-ticket'}" class="text-lg transition-fast text-black hover:text-purple-700 lg:text-base">
                            {{ navItem.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import LogoItem from '~/components/LogoItem.vue';
import InputField from '~/components/form/InputField.vue';
import BaseIcon from '~/components/BaseIcon.vue';
import LocaleSwitcher from '~/components/LocaleSwitcher.vue';
import BaseButton from '~/components/BaseButton.vue';

@Component({
    components: { BaseButton, LocaleSwitcher, BaseIcon, InputField, LogoItem }
})
export default class TheHeader extends Vue {
    navItems = [
        {
            name: 'Музей',
            id: 1
        },
        {
            name: 'Посетителям',
            id: 2
        },
        {
            name: 'Выставки и события',
            id: 3
        }
    ];
}
</script>

