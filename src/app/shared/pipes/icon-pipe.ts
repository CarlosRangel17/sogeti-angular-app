import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'icon' })
export class IconPipe implements PipeTransform {
    transform(value: string): string {
        const formatValue = value ? value.toString() : '';
        switch (formatValue) {
            case '1':
                return 'code';
            case '2':
                return 'web';
            case '3':
                return 'smartphone';
            case '4':
                return 'cloud';
            case '5':
                return 'bar_chart';
        }
    }
}
