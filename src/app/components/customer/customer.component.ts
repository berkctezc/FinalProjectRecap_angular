import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  dataLoaded = false;
  filterTextCustomer = "";

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.getCustomers()
  }
  getCustomers() {
    this.customerService.getCustomers().subscribe(response => {
      console.log(response);
      this.customers = response.data
      this.dataLoaded = true;
    })
  }
}