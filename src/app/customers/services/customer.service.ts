import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customersUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl);
  }

  getCustomerById(id: number | string): Observable<Customer> {
    return this.http.get<Customer>(`${this.customersUrl}/${id}`);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.customersUrl}/`, customer);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${this.customersUrl}/${id}`, customer);
  }

  deleteCustomer(payload: number) {
    return this.http.delete(`${this.customersUrl}/${payload}`);
  }
}
