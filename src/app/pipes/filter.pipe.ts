import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/cardetail';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: CarDetail[], filterText: string): CarDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ""
    return filterText ? value.filter((c: CarDetail) => c.description.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }
}