import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contract } from '../../models/contract';


@Component({
  selector: 'app-contract-card',
  templateUrl: './contract-card.component.html',
  styleUrls: ['./contract-card.component.scss']
})
export class ContractCardComponent implements OnInit {
  @Output('viewChange') viewChange = new EventEmitter<any>();
  @Input('contract') contract: Contract;
  @Input('showActions') showActions = true;
  @Input('showMarketActions') showMarketActions = false;
  @Input('full-width') fullWidth = true;
  constructor() { }

  ngOnInit() {
    console.log(this.contract);
  }

}
