import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Customer } from '../../models/customer.model';
import { CustomerActions } from '../../store/action.types';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  customers!: Customer[];
  constructor(private router: Router, private store: Store<any>) {}
  
  ngOnInit(): void {
    // this.store.dispatch(CustomerActions.loadCustomer())
    this.store.subscribe(state => {
      this.customers = state.customers.customers
    });
  }

  editCustomer():void {
    this.router.navigate(["/customers/edit"])
  }

  deleteCustomer():void {}

}
