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
    { id: 1, nombre: 'Producto X', precio: 99.99, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9JXSaafpWjfXmHH6lErS2OWLKIsj9uGihHA&s' },
    { id: 2, nombre: 'X1', precio: 50.00, imagen: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Item_Primogem.png/revision/latest?cb=20201117071158' },
    { id: 3, nombre: 'X2', precio: 25.00, imagen: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Item_Primogem.png/revision/latest?cb=20201117071158' },
    { id: 4, nombre: 'X3', precio: 15.99, imagen: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Item_Primogem.png/revision/latest?cb=20201117071158' },
    { id: 5, nombre: 'X4', precio: 10.00, imagen: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Item_Primogem.png/revision/latest?cb=20201117071158' },
    { id: 6, nombre: 'X5', precio: 5.00, imagen: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Item_Primogem.png/revision/latest?cb=20201117071158' }
  ];

  constructor() {}

  ngOnInit(): void {}
}