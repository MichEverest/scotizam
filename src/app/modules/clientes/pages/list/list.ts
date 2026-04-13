import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrls: ['./list.scss']
})
export class List implements OnInit {

  items: any[] = [
    { id: 1, nombre: 'Producto Alpha', descripcion: 'Descripción del primer producto de prueba.', precio: 2500 },
    { id: 2, nombre: 'Producto Beta', descripcion: 'Descripción del segundo producto de prueba.', precio: 1200 },
    { id: 3, nombre: 'Producto Gamma', descripcion: 'Descripción del tercer producto de prueba.', precio: 850 }
  ];

  constructor() {}

  ngOnInit(): void {}

}