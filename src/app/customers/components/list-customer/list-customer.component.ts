import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Customer } from '../../models/customer.model';
import { CustomerActions } from '../../store/action.types';
import { select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectFeatureCustomers,
  selectFeatureError,
  selectFeatureLoading,
} from '../../store/customer.selector';
import * as fromCustomer from '../../store/customer.reducer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {
  customers$!: Observable<Customer[]>;
  loadCustomer$!: Observable<boolean>;
  loading$!: Observable<boolean>;
  error$!: Observable<string>;

  constructor(
    private router: Router,
    private store: Store<fromCustomer.AppState>
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.store.dispatch(CustomerActions.loadCustomers());
    this.customers$ = this.store.pipe(select(selectFeatureCustomers));
    this.loading$ = this.store.pipe(select(selectFeatureLoading));
    this.error$ = this.store.pipe(select(selectFeatureError));
  }

  editCustomer(id: number | undefined): void {
    this.router.navigate([`/customers/edit/${id}`]);
  }

  deleteCustomer(customer: Customer): void {
    if (confirm('Are you sure you want to delete this customer')) {
      this.store.dispatch(CustomerActions.deleteCustomer({ id: customer.id }));

      this.loadCustomers();
    }
  }
}
