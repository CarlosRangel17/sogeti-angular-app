import { Component } from '@angular/core';
import { ConsultantService } from '../../../shared/services/consultant.service';
import { MarketCategory } from '../../models/market-category';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {
  filteredAssetCategories: MarketCategory[] = [];
  assetCategories: MarketCategory[] = [];

  constructor(private consultantService: ConsultantService) {
    this.filteredAssetCategories = this.assetCategories = this.consultantService.getMarketConsultants();
  }

  onFilter(list: number[]) {
    this.filteredAssetCategories = list
      ? this.assetCategories.filter(category => list.includes(category.Key))
      : this.assetCategories;
  }
}
