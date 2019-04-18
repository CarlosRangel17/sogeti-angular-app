import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'marketIcon' })
export class MarketIconPipe implements PipeTransform {
    transform(value: string): string {
        const formatValue = value ? value.toString() : '';
        switch (formatValue) {
            case '0':
                return 'person';
            case '1':
                return 'star_rate';
            case '2':
                return 'code';
            case '3':
                return 'web';
            case '4':
                return 'smartphone';
            case '5':
                return 'cloud';
            case '6':
                return 'bar_chart';
        }
    }
}
