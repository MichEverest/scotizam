import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'clientes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes-list.html',
  styleUrls: ['./clientes-list.scss']
})
export class ClientesList {

  clientes: any[] = [];

  constructor(private service: ClientesService) {
    this.clientes = this.service.getAll();
  }

}