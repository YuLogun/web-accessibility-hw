<template>
    <footer class="bg-gray-100 py-[72px] sm:py-14">
        <h2 class="v-h">
            Подвал сайта
        </h2>
        <div class="container">
            <div class="grid grid-cols-2 lg:grid-cols-1 lg:gap-y-12">
                <div>
                    <div class="mb-8 lg:mb-12">
                        <h3 id="main_footer_navigation_title" class="v-h" aria-hidden="true">
                            Меню (подвал сайта)
                        </h3>
                        <nav aria-labelledby="main_footer_navigation_title">
                            <ul role="list">
                                <li v-for="navItem in navItems" :key="navItem.id" class="mb-2.5 last:mb-0">
                                    <NuxtLink :to="{name: 'purchase-ticket'}" class="text-lg transition-fast text-black hover:text-purple-700">
                                        {{ navItem.name }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h3 id="footer_socials_title" class="mb-4 sm:mb-6">
                            Соц. сети
                        </h3>
                        <ul aria-labelledby="footer_socials_title" role="list" class="flex items-center -mx-3">
                            <li v-for="social in socials" :key="social.id" class="mx-3">
                                <a
                                    aria-describedby="open_in_new_window_text"
                                    class="flex items-center justify-center transition-main hover:opacity-70"
                                    href="https://web-accessibility.ca/"
                                    target="_blank"
                                >
                                    <span class="v-h">{{ social.description }}</span>
                                    <span id="open_in_new_window_text" class="v-h">Ссылка откроется в новой вкладке</span>
                                    <span aria-hidden="true" class="fill-current text-black-900">
                                        <BaseIcon :name="social.name" width="40" height="40" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 id="footer_subscription_title" class="mb-10 sm:mb-12">
                        Подписка на новости
                    </h3>
                    <form @submit.prevent="">
                        <fieldset aria-labelledby="footer_subscription_title" class="sm:grid sm:gap-y-4">
                            <div class="flex items-center -mx-2 mb-4 sm:mx-0 sm:mb-0">
                                <InputField
                                    required
                                    aria-required="true"
                                    :value.sync="email"
                                    title="Email"
                                    placeholder="Введите почту"
                                    class="mx-2 flex-auto sm:mx-0"
                                    type="email"
                                    autocomplete="email"
                                />
                                <div class="mx-2 flex-shrink-0 sm:hidden">
                                    <BaseButton theme="purple-900" size="xmedium" type="submit">
                                        Подписаться
                                    </BaseButton>
                                </div>
                            </div>
                            <ToggleField
                                :value.sync="agreement"
                                :field-value="agreement"
                                required
                                aria-required="true"
                                title="Согласен на обработку персональх данных"
                                view="check"
                            />
                            <div class="a-sm:hidden">
                                <BaseButton theme="purple-900" size="xmedium" type="submit">
                                    Подписаться
                                </BaseButton>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import BaseIcon from '~/components/BaseIcon.vue';
import InputField from '~/components/form/InputField.vue';
import BaseButton from '~/components/BaseButton.vue';
import ToggleField from '~/components/form/ToggleField.vue';

@Component({
    components: { ToggleField, BaseButton, InputField, BaseIcon }
})
export default class TheFooter extends Vue {
    email ='';
    agreement = false;

    navItems = [
        {
            name: 'Посетителям с ограниченными возможностями',
            id: 1
        },
        {
            name: 'Билеты и льготы',
            id: 2
        },
        {
            name: 'Противодействие коррупции',
            id: 3
        }
    ];

    socials = [
        {
            name: 'mail',
            description: 'Почта',
            id: 1
        },
        {
            name: 'telegram',
            description: 'Телеграм канал',
            id: 2
        },
        {
            name: 'facebook',
            description: 'Фейсбук',
            id: 3
        }
    ];
}
</script>

