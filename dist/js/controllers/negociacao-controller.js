import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class Negociacaocontroller {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adiciona(negociacao);
        negociacao.data.setDate(12);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    criarNegociacao() {
        const exp = /-/;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}