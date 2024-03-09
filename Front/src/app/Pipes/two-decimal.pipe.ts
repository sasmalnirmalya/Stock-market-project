import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDecimal'
})
export class TwoDecimalPipe implements PipeTransform {

  transform(value: number): unknown {
    if (isNaN(value)) {
      return '';
    }
    return value.toFixed(2);
  }

}
