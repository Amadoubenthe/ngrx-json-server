import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  // constructor (private http: HttpClient) {}

  // getAll() {
  //   return this.http.get('/movies');
  // }

  private customersUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl);
  }

  getCustomerById(payload: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.customersUrl}/${payload}`);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.customersUrl}/`, customer);
  }
}
