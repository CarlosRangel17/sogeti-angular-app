import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  panelOpenState = false;
  options = [];
  selectedOption = '';
  constructor(private router: Router, private route: ActivatedRoute) {
    this.selectedOption = this.route.snapshot.paramMap.get('section');
    if (!this.selectedOption) {
      this.selectedOption = this.options.length > 0 ? this.options[0].key : '';
    }

    console.log(this.selectedOption);
  }
}
