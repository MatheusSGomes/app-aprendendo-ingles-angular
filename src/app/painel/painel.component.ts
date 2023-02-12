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
  public resposta!: string;
  public rodada: number = 0;
  public rodadaFrase!: Frase;

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada];
  };

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    console.log(this.resposta);
  }

  public verificarRespota(): void {
    // verificar se a tradução está correta
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('Tradução correta');
      
      // trocar pergunta da rodada
      this.rodada++;

      // atualiza frase
      this.rodadaFrase = this.frases[this.rodada];

    } else {
      alert('Tradução errada');
    }
  }
}
