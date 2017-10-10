import { Negociacao } from './Negociacao';
import { LogarTempoExecucao } from '../helpers/decorators/LogarTempoExecucao';

export class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    @LogarTempoExecucao()
    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    @LogarTempoExecucao()
    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}
