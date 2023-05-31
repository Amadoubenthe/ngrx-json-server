import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';

const routes: Routes = [
  {path: '', redirectTo: "list", pathMatch: "full"},
  {path: 'list', component: ListCustomerComponent},
  {path: 'add', component: AddCustomerComponent},
  {path: 'edit', component: EditCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
