import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { CustomerActions } from './action.types';
import { Customer } from '../models/customer.model';

@Injectable()
export class CustomerEffects {
  loadCustomer$ = createEffect(() =>
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

  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}
}
