export abstract class View<T> {

    protected _elemento: JQuery;
    private _scape: boolean;

    constructor(seletor: string, scape: boolean = false) {
        this._elemento = $(seletor);
        this._scape = scape;
    }

    update(model: T) {
        let template = this.template(model);
        if(this._scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(template);
    }

    abstract template(model: T): string;

}

