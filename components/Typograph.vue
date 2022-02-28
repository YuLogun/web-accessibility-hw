<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { makeTextPretty } from '~/helpers/typograf';

@Component({
    render(this: Typograph, createElement) {
        if (this.html) {
            return createElement(this.as, {
                class: [this.classes.root],
                domProps: {
                    innerHTML: makeTextPretty(`${ this.html }`)
                }
            });
        }

        return createElement(this.as);
    }
})
export default class Typograph extends Vue {
    @Prop({ type: String, required: true })
    html!: string|null;

    @Prop({ type: String, required: false, default: 'div' })
    as!: string;

    get classes(): {root: any} {
        return {
            root: {
                typography: true
            }
        };
    }
}
</script>
