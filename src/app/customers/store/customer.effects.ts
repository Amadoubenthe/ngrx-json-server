import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { CustomerActions } from './action.types';
import { Customer } from '../models/customer.model';

@Injectable()
export class CustomerEffects {
  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActions.loadCustomers),
      mergeMap(() =>
        this.customerService.getCustomers().pipe(
          map((customers) =>
            CustomerActions.loadCustomersSuccess({ customers })
          ),
          catchError((error) =>
            of(CustomerActions.loadCustomersFailed({ error: error.message }))
          )
        )
      )
    )
  );

  addCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActions.addCustomer),
      map(
        (action: ReturnType<typeof CustomerActions.addCustomer>) =>
          action.customer
      ),
      mergeMap((customer: Customer) =>
        this.customerService.addCustomer(customer).pipe(
          map((customer) => CustomerActions.addCustomerSuccess({ customer })),
          catchError((error) =>
            of(CustomerActions.addCustomerFailed({ error: error.message }))
          )
        )
      )
    )
  );

  loadCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActions.loadCustomer),
      map((action: any) => action.customerId),
      mergeMap((customerId: number) =>
        this.customerService.getCustomerById(customerId).pipe(
          map((customer) => CustomerActions.loadCustomerSuccess({ customer })),
          catchError((error) =>
            of(CustomerActions.loadCustomerFailed({ error: error.message }))
          )
        )
      )
    )
  );

  updateCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActions.updateCustomer),
      map((action) => action.customer),
      mergeMap((customer: Customer) =>
        this.customerService.updateCustomer(customer.id, customer).pipe(
          map((changes: any) =>
            CustomerActions.updateCustomerSuccess({ changes })
          ),
          catchError((error) =>
            of(CustomerActions.updateCustomerFailed({ error: error.message }))
          )
        )
      )
    )
  );

  deleteCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActions.deleteCustomer),
      map((action: any) => action.id),
      mergeMap((id: number) =>
        this.customerService.deleteCustomer(id).pipe(
          map((id: any) => CustomerActions.deleteCustomerSuccess({ id })),
          catchError((error) =>
            of(CustomerActions.deleteCustomerFailed({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}
}
