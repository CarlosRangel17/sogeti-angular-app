import { Component, OnInit, Input } from '@angular/core';
import { Consultant } from '../../models/consultant';

@Component({
  selector: 'app-consultant-card',
  templateUrl: './consultant-card.component.html',
  styleUrls: ['./consultant-card.component.scss']
})
export class ConsultantCardComponent implements OnInit {
  @Input('consultant') consultant: Consultant;
  @Input('showActions') showActions = true;
  @Input('full-width') fullWidth = true;
  constructor() { }

  ngOnInit() {
  }

}
