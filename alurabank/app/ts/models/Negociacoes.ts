import { Negociacao } from './Negociacao';
import { LogarTempoExecucao } from '../helpers/decorators/index';

export class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    @LogarTempoExecucao(true)
    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    @LogarTempoExecucao()
    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}
