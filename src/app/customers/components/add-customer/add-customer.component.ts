import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  constructor(private router: Router){}


  ngOnInit(): void {
    
  }

  addCustomer(): void {
    this.router.navigate(["/add"]);
  }

}
