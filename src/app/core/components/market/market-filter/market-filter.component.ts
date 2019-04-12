import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-market-filter',
  templateUrl: './market-filter.component.html',
  styleUrls: ['./market-filter.component.css']
})
export class MarketFilterComponent implements OnInit {
  categoryOptions = new FormControl();
  // tslint:disable-next-line:no-input-rename
  @Input('categories') categories: Map<any, any>;
  constructor() { }

  ngOnInit() {
  }

}
