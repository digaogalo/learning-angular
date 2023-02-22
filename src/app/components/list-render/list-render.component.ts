import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  constructor(private listService: ListService) {}
  animals: Animal[] = [
      {name: 'Turca', type:  'Dog', age: 3},
      {name: 'Cristal', type:  'Cat', age: 5},
      {name: 'Frida', type:  'Dog', age: 6},
      {name: 'Tobias', type:  'Cat', age: 1}
  ]

  animalDetails = ''

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos.`
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal ...')
    this.animals =  this.listService.remove(this.animals, animal)
  }
}
