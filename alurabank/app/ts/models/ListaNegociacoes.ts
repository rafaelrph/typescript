class ListaNegociacoes {

    private _negociacoes: Negociacao[] = [];

    adicionar(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    toArray() {
        return this._negociacoes;
    }

}