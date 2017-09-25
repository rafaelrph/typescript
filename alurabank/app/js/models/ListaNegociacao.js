class ListaNegociacao {
    constructor() {
        this._negociacoes = [];
    }
    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }
    toArray() {
        return this._negociacoes;
    }
}
