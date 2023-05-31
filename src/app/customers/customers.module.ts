import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';


@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
