import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerState } from '../../store/customer.reducer';
import { Store } from '@ngrx/store';
import { CustomerActions } from '../../store/action.types';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  customerForm!: FormGroup;

  nameControl!: FormControl;
  phoneControl!: FormControl;
  addressControl!: FormControl;
  membershipControl!: FormControl;

  constructor(
    private store: Store<CustomerState>,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initFormControl();
    this.initForm();
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

  isFormValid(): boolean {
    return this.customerForm.valid;
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      const customer: Customer = {
        ...this.customerForm.value,
      };

      this.store.dispatch(CustomerActions.addCustomer({ customer }));
      this.customerForm.reset();
      this.router.navigate(['/customers/list']);
    }
  }
}
