import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import { Store, StoreModule } from '@ngrx/store';
import { customerReducer } from './store/customer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './store/customer.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forFeature('customers', customerReducer),
    EffectsModule.forFeature(CustomerEffects),
    HttpClientModule,
  ],
})
export class CustomersModule {}
