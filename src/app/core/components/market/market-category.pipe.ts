import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'marketCategory' })
export class MarketCategoryPipe implements PipeTransform {
  transform(value: number): string {

    switch (value) {
      case 0:
        return 'Recently Added';
      case 1:
        return 'Most Reviewed';
      case 2:
        return 'Blockchain';
      case 3:
        return 'Web';
      case 4:
        return 'Mobile';
      case 5:
        return 'Business Analytics';
    }
  }
}
