import * as typograf from 'typograf';
import Typograf from 'typograf';

interface ITypograf extends typograf.Typograf {}

let typografInstance: ITypograf | null = null;

export const makeTextPretty = (html: string): string => {
    if (typografInstance === null) {
        typografInstance = new Typograf({
            locale: ['ru']
        });
    }

    if (!typografInstance) {
        return html;
    }

    return typografInstance.execute(html);
};
