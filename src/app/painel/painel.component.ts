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

  constructor() { console.log(FRASES); };

  public atualizaResposta(): void {
    console.log('Teste');
  }
}
