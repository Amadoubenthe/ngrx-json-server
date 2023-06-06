import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Customer } from '../../models/customer.model';
import { CustomerActions } from '../../store/action.types';
import { select } from '@ngrx/store';
import { CustomerState } from '../../store/customer.reducer';
import { Observable } from 'rxjs';
import { selectFeatureCustomers } from '../../store/customer.selector';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {
  customers$!: Observable<Customer[]>;
  constructor(private router: Router, private store: Store<CustomerState>) {}

  ngOnInit(): void {
    this.store.dispatch(CustomerActions.loadCustomers());

    this.customers$ = this.store.pipe(select(selectFeatureCustomers));
  }

  editCustomer(): void {
    this.router.navigate(['/customers/edit']);
  }

  deleteCustomer(): void {}
}
