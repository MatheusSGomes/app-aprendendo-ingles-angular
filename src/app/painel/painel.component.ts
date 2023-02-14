import { Component } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase!: Frase;
  public progresso: number = 0;
  public tentativas: number = 3;

  constructor() { 
    this.atualizaRodada();
  };

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarRespota(): void {
    // verificar se a tradução está correta
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('Tradução correta');
      
      // trocar pergunta da rodada
      this.rodada++;

      // progresso
      this.progresso = this.progresso + (100 / this.frases.length);

      // atualiza frase
      this.atualizaRodada();

    } else {
      // decrementar variável tentativas
      this.tentativas--;
      
      if (this.tentativas <= -1) {
        alert('Você não tem mais tentativas');
      }
    }
  }

  public atualizaRodada(): void {
    // define a frase da rodada
    this.rodadaFrase = this.frases[this.rodada];
    // limpa a resposta
    this.resposta = '';
  }
}