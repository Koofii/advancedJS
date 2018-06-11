import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetick'
})
export class DatetickPipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    return value.toLocaleString();
  }

}
