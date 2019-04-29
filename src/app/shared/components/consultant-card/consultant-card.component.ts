import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Consultant } from '../../models/consultant';

@Component({
  selector: 'app-consultant-card',
  templateUrl: './consultant-card.component.html',
  styleUrls: ['./consultant-card.component.scss']
})
export class ConsultantCardComponent implements OnInit {
  @Output('viewChange') viewChange = new EventEmitter<any>();
  @Input('consultant') consultant: Consultant;
  @Input('showActions') showActions = true;
  @Input('showMarketActions') showMarketActions = false;
  @Input('full-width') fullWidth = true;
  constructor() { }

  ngOnInit() {
  }

  viewFilter(view) {
    // console.log('emit view:', view);
    this.viewChange.emit(view);
  }
}
