import { Component, Input } from '@angular/core';
import { ConsultantService } from '../../../shared/services/consultant.service';
import { MarketCategory } from '../../models/market-category';
import { Consultant } from 'src/app/shared/models/consultant';
import { ConsultantAssetchain } from 'src/app/shared/models/consultant-assetchain';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {
  @Input('is-admin') isAdmin: boolean = false;
  filteredAssetCategories: MarketCategory[] = [];
  assetCategories: MarketCategory[] = [];
  marketCategories: MarketCategory[] = [];
  contracts: any[] = [];
  consultants: Consultant[] = [];
  viewMode = 'contracts';
  panelOpenState = false;
  contractView = 'All';

  constructor(private consultantService: ConsultantService) {

    this.consultantService.getConsultants().subscribe((c) => {
      
      console.log('c:', c);
      this.marketCategories = [];

      // Format assets here
      c.forEach((asset:ConsultantAssetchain) => {

        console.log('consultant:', asset);

        const marketCategory = this.marketCategories.find(category => (category.Key === asset.Record.SkillType));
        // For market category purposes
        if (this.marketCategories && marketCategory) {
          marketCategory.Consultants.push(asset.Record);
        } else {

          // Compile the Consultants returned
          this.consultants.push(asset.Record);

          // Compile the Market Categories 
          this.marketCategories.push({
            Key: asset.Record.SkillType,
            AvatarUrl: '',
            Icon: asset.Record.SkillType.toString(),
            Consultants: [asset.Record]
          });
        }
      });

      // Increment for market cateogry UI/UX
      this.marketCategories.forEach(category => {
        category.Key;
        category.Icon = category.Key.toString();
      });

      console.log('marketCategories:', this.marketCategories);
      // TODO: Work out logic for 'Most Reviewed' & 'Newly Added' categories
      // - const mostReviewed = c;
      // - const newlyAdded = c;
      this.marketCategories.push({
        Key: 0,
        AvatarUrl: '',
        Icon: '0',
        Consultants: this.consultants
      });
      this.marketCategories.push({
        Key: 1,
        AvatarUrl: '',
        Icon: '1',
        Consultants: this.consultants
      });

      
      return this.filteredAssetCategories = this.assetCategories = this.marketCategories;
    });

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
