import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterStatus',
})
export class CharacterStatusPipe implements PipeTransform {
  transform(value: string, DueAmount: number): any {
    if (DueAmount >= 40000) {
      return 'Defaulter';
    } else if (DueAmount <= 40000 && DueAmount >= 10000) {
      return 'mistake';
    } else {
      return 'eligible';
    }
  }
}
