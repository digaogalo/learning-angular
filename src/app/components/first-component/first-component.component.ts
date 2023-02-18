import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{
  name: string = 'Rodrigo'
  age: number = 37
  job = 'Programador'
  hobbies = ['Estudar', 'Jogar games', 'ler']
  car = {
    name: 'Volvo',
    year: '2019'
  }

   constructor() { }

   ngOnInit(): void {

   }
}
