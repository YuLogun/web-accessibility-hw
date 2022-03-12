<template>
    <header class="pн-9">
        <div class="container flex items-center justify-between">
            <LogoItem />
            <div class="flex-auto ml-4 flex items-center justify-end">
                <form role="search" class="flex-auto max-w-[295px]">
                    <InputField type="search" aria-label="Поиск по сайту">
                        <template #append>
                            <span class="pb-1">
                                <BaseIcon name="search" width="19" height="19" />
                            </span>
                        </template>
                    </InputField>
                    <InputField type="submit" value="Поиск" class="v-h" />
                </form>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import LogoItem from '~/components/LogoItem.vue';
import InputField from '~/components/form/InputField.vue';
import BaseIcon from '~/components/BaseIcon.vue';

@Component({
    components: { BaseIcon, InputField, LogoItem }
})
export default class TheHeader extends Vue {}
</script>

