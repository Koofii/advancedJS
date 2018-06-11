import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caps'
})
export class CapsPipe implements PipeTransform {

  transform(value: string, limit: number): any {
    return value ? value.substring(0, limit).toUpperCase() : null;
  }

}
