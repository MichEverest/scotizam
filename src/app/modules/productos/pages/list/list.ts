import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CotizacionService } from '../../../../core/services/cotizacion';

@Component({
  selector: 'cotizacion-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrls: ['./list.scss']
})
export class List implements OnInit {

  cotizaciones: any[] = [];

  constructor(private cotizacionService: CotizacionService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.cotizacionService.getAll().subscribe({
      next: (res: any) => {
        this.cotizaciones = res;
      },
      error: (err) => {
        console.error('Error cargando cotizaciones', err);
      }
    });
  }

}