import { Component, Input, OnInit } from '@angular/core';
import { ConsultantService } from '../../../shared/services/consultant.service';
import { MarketCategory } from '../../models/market-category';
import { Consultant } from 'src/app/shared/models/consultant';
import { ConsultantAssetchain } from 'src/app/shared/models/consultant-assetchain';
import { SOWContractService } from 'src/app/shared/services/sowcontract.service.';
import { Contract, ModelType } from 'src/app/shared/models/contract';
import { ContractAssetchain } from 'src/app/shared/models/contract-assetchain';
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
  contractTypes: ContractType[] = [];
  sowContracts: Contract[] = [];
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
      s.forEach((asset: ContractAssetchain) => {
      console.log('*** BEGIN ITERATING OVER CONTRACT ASSETS ***');
    this.sowContractService.getContracts().subscribe((s) => {


      // console.log('c:', c);


        asset.Record.Id = asset.Key;
        // Assign consultant ID from Blockchain TRX Id 
      });
        this.sowContracts.push(new Contract(ModelType.JSON, asset));
    });
      console.log('contracts:', this.sowContracts);
    // Get Consultants

    this.consultantService.getConsultants().subscribe((c) => {
      this.marketCategories.push({
        Icon: '0',
      this.marketCategories.push({
      this.marketCategories = [];

      // Provide default categories: 'Most Reviewed' & 'Recently Added'
        AvatarUrl: '',
        Key: 0,
        Consultants: []
      });
        Key: 1,
        Icon: '1',
        AvatarUrl: '',
      });
        Consultants: []

      c.forEach((asset: ConsultantAssetchain) => {
      // Format assets here
        // console.log('*** BEGIN ITERATING OVER CONSULTANT ASSETS ***');

        // Assign consultant ID from Blockchain TRX Id 

        asset.Record.Id = asset.Key;

        // Check if market categories contains the asset's skilltype 

          // Found matching category 
        let marketCategory = this.marketCategories.find(category => category.Key === +asset.Record.SkillType);
          });
            Key: +asset.Record.SkillType, // the '+' unary operator converts string to int 
            Icon: asset.Record.SkillType.toString(),
            Consultants: [asset.Record]
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
