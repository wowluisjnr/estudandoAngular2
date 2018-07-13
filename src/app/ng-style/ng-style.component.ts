import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  tamanho: number = 20;
  valorFonte: string = 20 + 'px';
  validarFonte: boolean = false;
  validarCor:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  incrementar(){
    this.tamanho ++;
    this.valorFonte = this.tamanho +'px';
  }

  mudarFonte(){
    this.validarFonte=!this.validarFonte;
  }
  mudarCor(){
    this.validarCor=!this.validarCor;
  }

}
