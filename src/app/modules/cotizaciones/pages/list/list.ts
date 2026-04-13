import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cotizacion-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrls: ['./list.scss']
})
export class List {

  cotizaciones = [
    { cliente: 'Empresa A', fecha: '2026-04-13', total: 500, estado: 'Pendiente' },
    { cliente: 'Empresa B', fecha: '2026-04-12', total: 900, estado: 'Aprobada' }
  ];

}