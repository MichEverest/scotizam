import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './soporte.html',
  styleUrls: ['./soporte.scss']
})
export class Soporte {

  faqs = [
    {
      pregunta: '¿Cómo crear una cotización?',
      respuesta: 'Ve a cotizaciones y crea una nueva.'
    },
    {
      pregunta: '¿Cómo agregar clientes?',
      respuesta: 'Desde el módulo de clientes puedes gestionarlos.'
    },
    {
      pregunta: '¿Cómo contactar soporte?',
      respuesta: 'Puedes usar este módulo o correo soporte@tuapp.com'
    }
  ];

}