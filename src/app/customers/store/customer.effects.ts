import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CustomerService } from '../services/customer.service';
import { Action } from '@ngrx/store';
import { CustomerActions } from '../store/action.types'


@Injectable()
export class CustomerEffects{

 
    // loadCustomers$: Observable<Action> = this.actions$.pipe(
    //     ofType<CustomerActions.loadCustomer>(
    //     customerActions.CustomerActionTypes.LOAD_CUSTOMERS
    //     ),
    //     mergeMap((action: CustomerActions.loadCustomer) =>
    //     this.customerService.getCustomers().pipe(
    //         map(
    //         (customers: Customer[]) =>
    //             new customerActions.LoadCustomersSuccess(customers)
    //         ),
    //         catchError(err => of(new customerActions.LoadCustomersFail(err)))
    //     )
    //     )
    // );

    

    constructor(
        private actions$: Actions,
        private customerService: CustomerService
    ) { }
}


// function Effect() {
//     throw new Error('Function not implemented.');
// }
// @Injectable()
// export class MovieEffects {
 
//   @Effect()
//   loadMovies$ = this.actions$
//     .pipe(
//       ofType('[Movies Page] Load Movies'),
//       mergeMap(() => this.customerService.getAll()
//         .pipe(
//           map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
//           catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
//         ))
//       )
//     ;
 
//   constructor(
//     private actions$: Actions,
//     private customerService: CustomerService
//   ) {}
// }

// function Effect(): (target: MovieEffects, propertyKey: "loadMovies$") => void {
//     throw new Error('Function not implemented.');
// }

