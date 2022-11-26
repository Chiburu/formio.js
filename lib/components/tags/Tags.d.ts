export default class TagsComponent extends Input {
    static get builderInfo(): {
        title: string;
        icon: string;
        group: string;
        documentation: string;
        weight: number;
        schema: any;
    };
    constructor(component: any, options: any, data: any);
    get delimiter(): any;
    choices: any;
}
import Input from "../_classes/input/Input";
