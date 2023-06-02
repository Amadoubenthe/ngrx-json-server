// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { mergeMap, map, catchError } from 'rxjs/operators';
// import { of } from 'rxjs';
// import { CustomerService } from '../services/customer.service';
// import { CustomerActions } from './action.types';

// @Injectable()
// export class CustomerEffects {
//   loadCustomer$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(CustomerActions.loadCustomer),
//       mergeMap(() =>
//         // Replace this with your actual HTTP request logic
//         this.customerService.getCustomers().pipe(
//           // map((customers) => ({
//           //   type: '[ListCustomer Component] loadCustomersSuccess',
//           //   customers,
//           // })),
//           map((customers) => CustomerActions.loadCustomersSuccess),
//           catchError((error) =>
//             of({
//               type: '[ListCustomer Component] loadCustomersFailed',
//               error: error.message,
//             })
//           )
//         )
//       )
//     )
//   );

//   constructor(
//     private actions$: Actions,
//     private customerService: CustomerService
//   ) {}
// }

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { CustomerActions } from './action.types';

@Injectable()
export class CustomerEffects {
  loadCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActions.loadCustomer),
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

  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}
}
