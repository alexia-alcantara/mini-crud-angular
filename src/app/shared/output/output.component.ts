import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    {nome: "Alexia", idade: 27},
    {nome: "Ana Paula", idade: 35},
    {nome: "Rick", idade: 15},
  ]

  constructor(){}

  ngOnInit(): void{

  }

  public getDados(event: number){
    this.enviarDados.emit(this.list[event]);
  }

}
