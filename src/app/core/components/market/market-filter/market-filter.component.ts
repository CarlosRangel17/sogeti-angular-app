import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-market-filter',
  templateUrl: './market-filter.component.html',
  styleUrls: ['./market-filter.component.css']
})
export class MarketFilterComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('categories') categories: Map<any, any>;
  // tslint:disable-next-line:no-output-rename
  @Output('filtered') filtered = new EventEmitter<any>();
  categoryOptions = new FormControl();
  levelControl = new FormControl();
  levelOptions: string[] = ['All', 'Associate Consultant', 'Consultant', 'Sr. Consultant', 'Manager'];
  constructor() { }

  ngOnInit() {
    const selection: number[] = [];
    this.categories.forEach((value: boolean, key: number) => {
      selection.push(key);
    });
    this.categoryOptions.setValue(selection);
  }

  filter(keys) {
    this.filtered.emit(keys);
  }

}
