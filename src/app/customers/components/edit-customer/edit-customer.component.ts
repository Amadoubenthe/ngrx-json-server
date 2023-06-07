import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CustomerState } from '../../store/customer.reducer';
import { Customer } from '../../models/customer.model';
import {
  getCurrentCustomer,
  selectFeatureError,
  selectFeatureLoading,
} from '../../store/customer.selector';
import { CustomerActions } from '../../store/action.types';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  id!: number;
  editMode!: boolean;
  loading$!: Observable<boolean>;
  error$!: Observable<string>;
  customerForm!: FormGroup;
  nameControl!: FormControl;
  phoneControl!: FormControl;
  addressControl!: FormControl;
  membershipControl!: FormControl;

  constructor(
    private store: Store<CustomerState>,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.params;
    this.id = param['id'];
    this.loadCustomer();
    this.editMode = !!this.id;
    this.initFormControl();
    this.initForm();
    this.getCustomerById();
  }

  loadCustomer(): void {
    this.store.dispatch(CustomerActions.loadCustomer({ customerId: this.id }));
    this.loading$ = this.store.pipe(select(selectFeatureLoading));
    this.error$ = this.store.pipe(select(selectFeatureError));
  }

  getCustomerById(): void {
    const customer$ = this.store.pipe(select(getCurrentCustomer));

    customer$.subscribe((currentCustomer) => {
      if (currentCustomer) {
        this.customerForm.patchValue({
          name: currentCustomer.name,
          phone: currentCustomer.phone,
          address: currentCustomer.address,
          membership: currentCustomer.membership,
          id: currentCustomer.id,
        });
      }
    });
  }

  initForm(): void {
    this.customerForm = this.fb.group({
      name: this.nameControl,
      phone: this.phoneControl,
      address: this.addressControl,
      membership: this.membershipControl,
    });
  }

  initFormControl(): void {
    this.nameControl = new FormControl(null, [Validators.required]);
    this.phoneControl = new FormControl(null, [Validators.required]);
    this.addressControl = new FormControl(null, [Validators.required]);
    this.membershipControl = new FormControl(null, [Validators.required]);
  }

  editCustomer(): void {
    const customer: Customer = {
      ...this.customerForm.value,
      id: this.id,
    };

    this.store.dispatch(CustomerActions.updateCustomer({ customer: customer }));

    this.router.navigate(['/customers/list']);
  }
}
