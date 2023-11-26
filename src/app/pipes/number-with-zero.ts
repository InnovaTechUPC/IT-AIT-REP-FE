import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NumberWithZero'
})
export class NumberWithZero implements PipeTransform {
  transform(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
