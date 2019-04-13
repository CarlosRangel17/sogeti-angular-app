import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'icon' })
export class IconPipe implements PipeTransform {
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
                return 'cloud';
            case '5':
                return 'bar_chart';
        }
    }
}
