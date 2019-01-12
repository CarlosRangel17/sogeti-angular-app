import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links = [];
  categories = [
    { name: 'Angular' },
    { name: 'Blockchain' },
    { name: 'Smart Contracts' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    for(const route of this.router.config){
      if(route.data && route.data.label){
        this.links.push({
          path: '/' + route.path,
          label: route.data.label
        })
      }
    }

    console.log(JSON.stringify(this.links));
  }

  selectCategory(category) {
    this.categories
      .filter(c => c != category)
      .forEach(c => c['selected'] = false);

      category.selected = !category.selected;
  }
}
