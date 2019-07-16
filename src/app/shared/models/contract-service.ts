export class ContractService {
    Key: number;
    Description: string;
    Icon: string;

    constructor(key: string) {
        this.Key = +key;

        switch (this.Key) {
            case 2:
                this.Description = 'Blockchain Srvs.';
                this.Icon = 'code';
                break;
            case 3:
                this.Description = 'Web Srvs.';
                this.Icon = 'web';
                break;
            case 4:
                this.Description = 'Cloud Srvs.';
                this.Icon = 'cloud1';
                break;
            case 5:
                this.Description = 'Mobile Srvs.';
                this.Icon = 'smartphone';
                break;
            case 6:
                this.Description = 'Business Analytics Srvs.';
                this.Icon = 'bar_chart';
                break;
        }
    }
} 