import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../models/customer';

@Pipe({
  name: 'filterCustomer'
})
export class FilterCustomerPipe implements PipeTransform {
  transform(value: Customer[], filterTextCustomer: string): Customer[] {
    filterTextCustomer = filterTextCustomer ? filterTextCustomer.toLocaleLowerCase() : ""
    return filterTextCustomer ? value.filter((c : Customer) => c.firstName.toLocaleLowerCase().indexOf(filterTextCustomer)!==-1) : value;
  }
}