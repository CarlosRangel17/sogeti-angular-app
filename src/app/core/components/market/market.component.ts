import { Component, Input, OnInit } from '@angular/core';
import { ConsultantService } from '../../../shared/services/consultant.service';
import { MarketCategory } from '../../models/market-category';
import { Consultant } from 'src/app/shared/models/consultant';
import { ConsultantAssetchain } from 'src/app/shared/models/consultant-assetchain';
import { SOWContractService } from 'src/app/shared/services/sowcontract.service.';
import { ContractAssetchain } from 'src/app/shared/models/contract-assetchain';
import { Contract, ModelType } from 'src/app/shared/models/contract';
import { ContractType } from 'src/app/shared/models/contract-type';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  @Input('is-admin') isAdmin: boolean = false;
  filteredAssetCategories: MarketCategory[] = [];
  assetCategories: MarketCategory[] = [];
  marketCategories: MarketCategory[] = [];
  sowContracts: Contract[] = [];
  contractTypes: ContractType[] = [];
  consultants: Consultant[] = [];
  viewMode = 'contracts';
  panelOpenState = false;
  contractView = 'All';
  selectedContractType = "All";

  constructor(
    private consultantService: ConsultantService,
    private sowContractService: SOWContractService
  ) {

    // Get SOW Contracts
    this.sowContractService.getContracts().subscribe((s) => {
      console.log('*** BEGIN ITERATING OVER CONTRACT ASSETS ***');

      s.forEach((asset: ContractAssetchain) => {

        // Assign consultant ID from Blockchain TRX Id 
        asset.Record.Id = asset.Key;
        this.sowContracts.push(new Contract(ModelType.JSON, asset));
      });

      console.log('contracts:', this.sowContracts);
    });

    // Get Consultants
    this.consultantService.getConsultants().subscribe((c) => {

      // console.log('c:', c);
      this.marketCategories = [];

      // Provide default categories: 'Most Reviewed' & 'Recently Added'
      this.marketCategories.push({
        Key: 0,
        AvatarUrl: '',
        Icon: '0',
        Consultants: []
      });
      this.marketCategories.push({
        Key: 1,
        AvatarUrl: '',
        Icon: '1',
        Consultants: []
      });

      // Format assets here
      c.forEach((asset: ConsultantAssetchain) => {

        // console.log('*** BEGIN ITERATING OVER CONSULTANT ASSETS ***');

        // Assign consultant ID from Blockchain TRX Id 
        asset.Record.Id = asset.Key;

        // Check if market categories contains the asset's skilltype 
        let marketCategory = this.marketCategories.find(category => category.Key === +asset.Record.SkillType);

        if (marketCategory) {
          // Found matching category 
          marketCategory.Consultants.push(asset.Record);

        } else {

          // Add consultants to master list 
          this.consultants.push(asset.Record);

          // Compile the Market Categories 
          this.marketCategories.push({
            Key: +asset.Record.SkillType, // the '+' unary operator converts string to int 
            AvatarUrl: '',
            Icon: asset.Record.SkillType.toString(),
            Consultants: [asset.Record]
          });
        }

        // Add to Recently Added
        this.marketCategories.find(x => x.Key === 0).Consultants.push(asset.Record);

        // Add to Most Reviewed 
        this.marketCategories.find(x => x.Key === 1).Consultants.push(asset.Record);

        // console.log("*** END ITERATION ***");
      }); // End formatting assets 

      // Increment for market cateogry UI/UX
      this.marketCategories.forEach(category => {
        category.Key;
        category.Icon = category.Key.toString();
      });

      return this.filteredAssetCategories = this.assetCategories = this.marketCategories;
    });
  }

  ngOnInit() {
    this.contractTypes = [
      { Key: 'All', Description: 'All Requested Srvs.', Icon: 'star' },
      { Key: 'Blockchain', Description: 'Blockchain Srvs.', Icon: 'code' },
      { Key: 'BA', Description: 'Business Analytics Srvs.', Icon: 'bar_chart' },
      { Key: 'Cloud', Description: 'Cloud Srvs.', Icon: 'cloud' },
      { Key: 'Mobile', Description: 'Mobile Srvs.', Icon: 'smartphone' },
      { Key: 'Web', Description: 'Web Srvs.', Icon: 'web' }
    ]
  }

  onContractTypeSelect(contractType) {
    console.log(contractType);
    this.selectedContractType = contractType.Key;
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
