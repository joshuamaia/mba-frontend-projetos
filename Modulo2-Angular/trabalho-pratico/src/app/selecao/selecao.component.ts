import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css'],
})
export class SelecaoComponent {
  @Input() opcoes: string[] = [];
  @Input() titulo: string = '';
  @Input() escolhaAte: number = 0;
  n: number = 0;
  nameRadio: number = Math.random();

  addRemoveOpcao(event: any) {
    if (event.target.checked) {
      this.n++;
    } else {
      this.n--;
    }
  }

  desabilitarNaoSelecionados(value: boolean) {
    return this.n >= this.escolhaAte && !value ? true : false;
  }
}
