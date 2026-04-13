import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export class Api {
  http = inject(HttpClient);
  url = 'http://localhost:3000';

  get(path: string) {
    return this.http.get(this.url + path);
  }

  post(path: string, data: any) {
    return this.http.post(this.url + path, data);
  }
}