import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.scss']
})
export class AdminDashboard implements OnInit {
  fechaActual = new Date();
  
  clientes = [
    { nombre: 'Ana García' },
    { nombre: 'Bernardo Lopez' },
    { nombre: 'Carlos Ruiz' },
    { nombre: 'Diana Prince' }
  ].sort((a, b) => a.nombre.localeCompare(b.nombre));

  historial = [
    { cliente: 'Ana García', monto: 0, fecha: '13/04/2026' },
    { cliente: 'Carlos Ruiz', monto: 0, fecha: '12/04/2026' }
  ];

  ngOnInit(): void {}
}