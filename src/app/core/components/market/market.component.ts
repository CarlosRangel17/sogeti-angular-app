import { Component } from '@angular/core';
import { MarketService } from '../../../shared/services/market.service';
import { MarketCategory } from '../../models/market-category';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {
  filteredAssetCategories: MarketCategory[] = [];
  assetCategories: MarketCategory[] = [];
  categories: Map<any, any>;
  filteredCategories: Map<any, any>;

  constructor(private marketService: MarketService) {
    this.filteredCategories = this.categories = this.marketService.getMarketAssets();
    this.filteredAssetCategories = this.assetCategories = this.marketService.getAssetCategories();
  }

  onFilter(list: number[]) {
    this.filteredAssetCategories = list
      ? this.assetCategories.filter(category => list.includes(category.Key))
      : this.assetCategories;
  }

  filterAssets(query) {
    // this.filteredCategories = (query)
    //   this.categories.filt
    // ?
  }
}
