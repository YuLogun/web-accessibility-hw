<template>
    <header class="py-9">
        <div class="container flex items-center justify-between">
            <LogoItem />
            <div class="flex-auto ml-4 flex items-center justify-end -mx-2">
                <form role="search" class="flex-auto max-w-[295px] mx-2">
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
                    <button aria-label="Войти" class="hover:opacity-70">
                        <span>
                            <BaseIcon name="user" width="46" height="46" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import LogoItem from '~/components/LogoItem.vue';
import InputField from '~/components/form/InputField.vue';
import BaseIcon from '~/components/BaseIcon.vue';
import LocaleSwitcher from '~/components/LocaleSwitcher.vue';

@Component({
    components: { LocaleSwitcher, BaseIcon, InputField, LogoItem }
})
export default class TheHeader extends Vue {}
</script>

