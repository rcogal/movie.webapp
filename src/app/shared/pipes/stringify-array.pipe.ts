import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringifyArray'
})
export class StringifyArrayPipe implements PipeTransform {

  public transform(arrValue: any, splitter?): string {
    return arrValue?.join(splitter ? splitter : ', ');
  }
}
