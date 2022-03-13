<template>
    <main class="flex-1 pt-8 pb-32 lg:pb-24">
        <!-- Выставки и события -->
        <section id="section_exhibitions_events" aria-labelledby="second_section_title">
            <div class="container">
                <h2 id="second_section_title" class="mb-10 lg:mb-6">
                    Выставки и события
                </h2>
                <form aria-labelledby="filter_exhibitions_title">
                    <fieldset role="radiogroup" class="relative flex flex-wrap items-center -mx-2 mb-10 lg:mb-6">
                        <legend id="filter_exhibitions_title" class="v-h">
                            Фильтр выставок и событий по датам
                        </legend>
                        <div
                            v-for="toggle in filterToggles"
                            :key="toggle.id"
                            class="mx-2 mb-2 text-lg"
                        >
                            <ToggleField
                                :value.sync="activeDateFilter"
                                type="radio"
                                :title="toggle.title"
                                :field-value="toggle.id"
                                name="filter-exhibitions-by-date"
                                :aria-label="`Выставки и события ${toggle.title}`"
                            />
                        </div>
                    </fieldset>
                    <span aria-live="polite" role="status" class="v-h">
                        <template v-if="filteredExhibitions.length">
                            Найдено: {{ filteredExhibitions.length }} {{ pluralize('результат|результата|результатов', filteredExhibitions.length) }}.
                        </template>
                        <template v-else>
                            Выставки и события не найдены.
                        </template>
                    </span>
                </form>
                <div>
                    <ul
                        aria-labelledby="second_section_title"
                        role="list"
                        class="grid grid-cols-3 gap-10 lg:grid-cols-2 sm:grid-cols-1"
                    >
                        <li v-for="exhibition in filteredExhibitions" :key="exhibition.id" class="typography">
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
import ToggleField from '~/components/form/ToggleField.vue';
import pluralize from '~/helpers/pluralize';

@Component({
    components: { ToggleField, BaseButton, Typograph, CardItem }
})
export default class IndexPage extends Vue {
    activeDateFilter = 1;

    filterToggles = [
        {
            id: 1,
            title: 'Все'
        },
        {
            id: 2,
            title: 'Сегодня'
        },
        {
            id: 3,
            title: 'Завтра'
        }
    ];

    exhibitions = [
        {
            id: 1,
            title: 'Святослав Рихтер в кругу друзей. Москва — Коктебель',
            subTitle: 'Выставка до 20 ноября',
            description: 'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
            image: '/images/exhibitions/1.jpg',
            dateId: 2
        },
        {
            id: 2,
            title: 'Тату',
            subTitle: 'Выставка до 27 сентября',
            description: 'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
            image: '/images/exhibitions/2.jpg',
            dateId: 2
        },
        {
            id: 3,
            title: 'От Дюрера до Матисса. Избранные рисунки из собрания ГМИИ им. А.С. Пушкина',
            subTitle: 'Выставка до 1 ноября',
            description: 'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
            image: '/images/exhibitions/3.jpg',
            dateId: 3
        }
    ];

    get filteredExhibitions(): any {
        return this.activeDateFilter === 1
            ? this.exhibitions
            : this.exhibitions.filter(exhibition => exhibition.dateId === this.activeDateFilter);
    }

    pluralize = pluralize;
}
</script>
