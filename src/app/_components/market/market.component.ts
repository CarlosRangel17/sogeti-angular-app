import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/_services/market.service';
import { Consultant } from 'src/app/_models/consultant';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {

  categories: Map<any, any>;
  filteredCategories: Map<any, any>;

  constructor(private marketService: MarketService) {
    this.filteredCategories = this.categories = this.marketService.getMarketAssets();
    console.log(this.categories);
  }

  filterAssets(query) {
    // this.filteredCategories = (query)
    //   this.categories.filt
    // ?
  }
}
