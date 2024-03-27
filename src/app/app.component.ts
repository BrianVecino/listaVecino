import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clase3';
  hasError = false;

  students = ['brian', 'william', 'goku', 'vegetta', 'naruto'];

  mostrarListado = false;

  alternarError (){

    this.hasError = !this.hasError;
  }
}
