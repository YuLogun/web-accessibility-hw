<template>
    <main class="flex-1 pt-8 pb-32 lg:pb-24">
        <!-- Выставки и события -->
        <section id="section_exhibitions_events" class="mb-24" aria-labelledby="second_section_title">
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

        <!-- Музей -->
        <section aria-labelledby="third_section_title">
            <div class="container">
                <h2 id="third_section_title" class="mb-10 lg:mb-6">
                    Музей
                </h2>
                <div role="tablist" class="flex flex-wrap items-center -mx-2 mb-11">
                    <div
                        v-for="tab in tabs"
                        :id="tab.id"
                        :key="tab.id"
                        :aria-controls="tab.controls"
                        role="tab"
                        class="mx-2 text-lg mb-2"
                    >
                        <ToggleField
                            :value.sync="activeTab"
                            type="radio"
                            :title="tab.title"
                            :field-value="tab.id"
                            name="museum-info"
                            :aria-label="`Информация о музее ${tab.title}`"
                        />
                    </div>
                </div>

                <div
                    v-if="activeTab === 'museum_info_buildings_title'"
                    id="museum_info_buildings"
                    role="tabpanel"
                    aria-labelledby="museum_info_buildings_title"
                >
                    <ul
                        aria-labelledby="museum_info_buildings_title"
                        role="list"
                        class="grid grid-cols-3 gap-10 lg:grid-cols-2 sm:grid-cols-1"
                    >
                        <li v-for="building in museumBuildings" :key="building.id" class="typography">
                            <CardItem
                                :title="building.title"
                                :image="building.image"
                            >
                                <Typograph v-if="building.description" :html="building.description" class="mt-2 mb-6" />
                                <BaseButton :href="{name: 'museum-buildings'}">
                                    Подробнее
                                    <Typograph
                                        role="presentation"
                                        as="span"
                                        :html="` о здании музея ${building.title}`"
                                        class="v-h"
                                    />
                                </BaseButton>
                            </CardItem>
                        </li>
                    </ul>
                </div>


                <div
                    v-if="activeTab === 'museum_info_history_title'"
                    id="museum_info_history"
                    role="tabpanel"
                    class="typography"
                    aria-labelledby="museum_info_history_title"
                >
                    <p>
                        Государственный музей изобразительных искусств имени А.С. Пушкина – одно из крупнейших в России художественных собраний зарубежного искусства с древнейших времен до наших дней.
                    </p>
                    <p>
                        В современной экспозиции представлены обширная учебная коллекция тонированных гипсовых слепков с произведений Античности, Средних веков и эпохи Возрождения, а также собрание подлинных произведений живописи, скульптуры, графики и декоративно-прикладного искусства.
                    </p>
                    <p>
                        В залах первого этажа Главного здания представлены: произведения искусства Древнего Египта, Античности, собрание европейской живописи VIII–XVIII веков; два зала – Итальянский и Греческий дворики – занимают слепки. На втором этаже Главного здания в залах размещены слепки произведений искусства Древней Греции, Рима, Средних веков и Возрождения.
                    </p>
                    <p>
                        В начале 2017 года музей определил новое направление своей деятельности – Пушкинский XXI, – ориентированное на современное российское и западное искусство во всех аспектах – выставочном, образовательном и исследовательском. Таким образом, ГМИИ им. А.С. Пушкина представляет собой открытую, интерактивную сцену, демонстрирующую развитие мировой культуры с древности до наших дней, живое, знакомое с детства пространство для получения знаний и общения.
                    </p>
                    <BaseButton href="#">
                        Читать далее
                    </BaseButton>
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
    activeTab = 'museum_info_buildings_title';

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

    tabs = [
        {
            title: 'Здания',
            id: 'museum_info_buildings_title',
            controls: 'museum_info_buildings'
        },
        {
            title: 'История',
            id: 'museum_info_history_title',
            controls: 'museum_info_history'
        }
    ];

    museumBuildings = [
        {
            id: 1,
            title: 'МЕМОРИАЛЬНАЯ КВАРТИРА С.Т. РИХТЕРА',
            description: 'ул. Большая Бронная, 2/6, 16 этаж, кв. 58',
            image: '/images/buildings/1.jpg'
        },
        {
            id: 2,
            title: 'ЦЭВ «МУСЕЙОН»',
            description: 'Колымажный пер., 6/2, 3 (вход с Малого Знаменского переулка)',
            image: '/images/buildings/2.jpg'
        },
        {
            id: 3,
            title: 'УСАДЬБА ЛОПУХИНЫХ',
            description: 'Малый Знаменский пер., 3/5с4',
            image: '/images/buildings/3.jpg'
        },
        {
            id: 4,
            title: 'УЧЕБНЫЙ МУЗЕЙ',
            description: 'ул. Чаянова, 15',
            image: '/images/buildings/4.jpg'
        },
        {
            id: 5,
            title: 'ОТДЕЛ ЛИЧНЫХ КОЛЛЕКЦИЙ',
            description: 'ул. Волхонка, 10',
            image: '/images/buildings/5.jpg'
        },
        {
            id: 6,
            title: 'ГАЛЕРЕЯ',
            description: 'ул. Волхонка, 14',
            image: '/images/buildings/6.jpg'
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
