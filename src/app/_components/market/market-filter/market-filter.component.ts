import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-market-filter',
  templateUrl: './market-filter.component.html',
  styleUrls: ['./market-filter.component.css']
})
export class MarketFilterComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('categories') categories: Map<any, any>;
  constructor() { }

  ngOnInit() {
  }

}
