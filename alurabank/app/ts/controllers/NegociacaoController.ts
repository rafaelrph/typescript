import { Negociacoes, Negociacao } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { InjectDOM } from '../helpers/decorators/index';

export class NegociacaoController {

    @InjectDOM('#data')
    private _inputData: JQuery;

    @InjectDOM('#quantidade')
    private _inputQuantidade: JQuery;

    @InjectDOM('#valor')
    private _inputValor: JQuery;
    
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {

        event.preventDefault();
        let data = new Date(this._inputData.val().replace(/-/g, ','));
        if(! this._diaUtil(data)) {
            this._mensagemView.update("Negociações só podem ser realizadas em dias úteis.");
            return;
        }

        const negociacao = new Negociacao(
            data, 
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    _diaUtil(data: Date): boolean {
        return data.getDay() != DiasDaSemana.Domingo && data.getDay() != DiasDaSemana.Sabado;
    }
}

enum DiasDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}