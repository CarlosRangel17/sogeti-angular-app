import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'marketImage' })
export class MarketImagePipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            case 0: // New
            return 'https://www.freshbooks.com/blog/wp-content/uploads/2019/01/productivity-apps-integrations-1.jpg';
            case 1: // Most Reviewed
            return 'http://ready2appraise.com/wp-content/uploads/2011/05/shutterstock_108947840-small.jpg';
            case 2: // Blockchain
            return 'https://cdn.pixabay.com/photo/2017/12/14/14/23/blockchain-3019121_1280.png';
            case 3: // Web
            return 'https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg';
            case 4: // Mobile
            return 'https://www.webology.technology/wp-content/uploads/2017/04/custom-apple-mobile-app-design-development-birmingham.png';
            case 5: // BA
            return 'https://cdn.pixabay.com/photo/2018/03/28/11/17/analytics-3268935_960_720.png';
        }
    }
}
