import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  constructor(private router: Router){}


  ngOnInit(): void {

  }

  editCustomer(): void {
    this.router.navigate(["/add"]);
  }
}
