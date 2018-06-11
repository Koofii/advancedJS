import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, args?: any): any {

    return value.length < args ? value : value.substring(0, args) + '...'

  }
}
