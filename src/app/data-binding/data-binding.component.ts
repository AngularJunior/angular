import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']

})
export class DataBindingComponent implements OnInit {

  url: string = 'www.google.com.br';
  urlImagem: string = 'http://lorempixel.com/400/200/nature/'
  cursoAngular: boolean = true;

  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';
  valorInicial = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  onKeyUp(evento: KeyboardEvent) {
    // console.log;
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }
  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
// function value(arg0: HTMLInputElement, value: any) {
//   throw new Error('Function not implemented.');
// }

