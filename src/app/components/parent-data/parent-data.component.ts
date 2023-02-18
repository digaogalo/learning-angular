import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit  {
  @Input() name: string = '';
  @Input() userData!: {email: string, role: string};
  @Input() cursos =  ['Origamid', 'DIO Bootacamp', 'Rocketseat']
  @Input() cursoSuperior!: {faculdade: string}
  @Input() matricula: string = '';

  constructor() { }

  ngOnInit(): void {}
}
