import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'icon' })
export class IconPipe implements PipeTransform {
    transform(value: string): string {
        const formatValue = value ? value.toString() : '';
        console.log(formatValue);
        switch (formatValue) {
            case '2':
                return 'code'; // blockchain
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
