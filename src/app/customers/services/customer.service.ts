import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor (private http: HttpClient) {}

  getAll() {
    return this.http.get('/movies');
  }
}
