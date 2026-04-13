import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes = [
    {
      nombre: 'Empresa A',
      compras: 5,
      total: 2000,
      productosFrecuentes: ['Laptop', 'Mouse']
    },
    {
      nombre: 'Empresa B',
      compras: 2,
      total: 500,
      productosFrecuentes: ['Teclado']
    }
  ];

  getAll() {
    return this.clientes;
  }

}