import { Component, Input } from '@angular/core';
import { ConsultantService } from '../../../shared/services/consultant.service';
import { MarketCategory } from '../../models/market-category';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {
  @Input('is-admin') isAdmin: boolean = false;
  filteredAssetCategories: MarketCategory[] = [];
  assetCategories: MarketCategory[] = [];
  contracts: any[] = [];
  viewMode = 'contracts';
  panelOpenState = false;
  contractView = 'All';

  constructor(private consultantService: ConsultantService) {
    this.filteredAssetCategories = this.assetCategories = this.consultantService.getMarketConsultants();
    this.contracts = [ 
      { Key: 'All', Description: 'All Requested Srvs.' }, 
      { Key: 'Blockchain', Description: 'Blockchain Srvs.' }, 
      { Key: 'BA', Description: 'Business Analytics Srvs.' }, 
      { Key: 'Cloud', Description: 'Cloud Srvs.' }, 
      { Key: 'Mobile', Description: 'Mobile Srvs.' },
      { Key: 'Web', Description: 'Web Srvs.' }
    ];
  }
  
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  onFilter(list: number[]) {
    this.filteredAssetCategories = list
      ? this.assetCategories.filter(category => list.includes(category.Key))
      : this.assetCategories;
  }

  viewChange(view: string) {
    this.viewMode = view;
    console.log(this.viewMode);
  }

  filterContractView(view: string) {
    this.contractView = view;
  }
}
