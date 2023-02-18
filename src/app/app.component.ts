import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Adrovani';

  userData = {
    email: 'adrovani@email.com',
    role: 'Admin'
  }

  cursos = ['Origamid', 'DIO Bootacamp', 'Rocketseat']

  cursoSuperior = {
    faculdade: 'Análise e Desenvolvimento de Sistemas (Estácio EAD)'
  }

  matricula = '123456'

  title = 'my-first-project';
}
