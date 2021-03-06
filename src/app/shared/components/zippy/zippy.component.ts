import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Consultant } from '../../models/consultant';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class ZippyComponent {
  @Input('is-admin') isAdmin: boolean = false;
  @Input('title') title: string;
  @Input('icon') icon: string;
  @Input('assets') assets: Consultant[];
  isExpanded: boolean;
  categories: any[] = [
    { key: 'list', description: 'List View' },
    { key: 'card', description: 'Card View' }
  ];
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
