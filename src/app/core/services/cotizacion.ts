import { Injectable } from '@angular/core';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  constructor(private api: Api) {}

  getAll() {
    return this.api.get('/cotizaciones');
  }

}