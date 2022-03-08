<template>
    <main class="flex-1">
        <!-- Выставки и события -->
        <section aria-labelledby="second_section_title">
            <div class="container">
                <h2 id="second_section_title" class="mb-10">
                    Выставки и события
                </h2>
                <div>
                    <ul aria-labelledby="second_section_title" role="list" class="grid grid-cols-3 gap-10">
                        <li v-for="exhibition in exhibitions" :key="exhibition.id" class="typography">
                            <CardItem
                                :title="exhibition.title"
                                :sub-title="exhibition.subTitle"
                                :image="exhibition.image"
                            >
                                <Typograph v-if="exhibition.description" :html="exhibition.description" class="mt-2 mb-6" />
                                <BaseButton :href="{name: 'purchase-ticket'}">
                                    Купить билет
                                    <Typograph
                                        role="presentation"
                                        as="span"
                                        :html="` на выставку ${exhibition.title}`"
                                        class="v-h"
                                    />
                                </BaseButton>
                            </CardItem>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CardItem from '~/components/CardItem.vue';
import Typograph from '~/components/Typograph.vue';
import BaseButton from '~/components/BaseButton.vue';

@Component({
    components: { BaseButton, Typograph, CardItem }
})
export default class IndexPage extends Vue {
    exhibitions = [
        {
            id: 1,
            title: 'Святослав Рихтер в кругу друзей. Москва — Коктебель',
            subTitle: 'Выставка до 20 ноября',
            description: 'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
            image: '/images/exhibitions/1.jpg'
        },
        {
            id: 2,
            title: 'Тату',
            subTitle: 'Выставка до 27 сентября',
            description: 'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
            image: '/images/exhibitions/2.jpg'
        },
        {
            id: 3,
            title: 'От Дюрера до Матисса. Избранные рисунки из собрания ГМИИ им. А.С. Пушкина',
            subTitle: 'Выставка до 1 ноября',
            description: 'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
            image: '/images/exhibitions/3.jpg'
        }
    ];
}
</script>
