import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/features/car-process/models/car';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Car[], filterText: string): Car[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null;
    return filterText
      ? value.filter(
          (c: Car) =>
            c.model.name.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
