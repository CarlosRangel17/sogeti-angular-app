import { Component, OnInit } from '@angular/core';
import { Consultant } from 'src/app/shared/models/consultant';
import { ConsultantService } from 'src/app/shared/services/consultant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-consultants',
  templateUrl: './company-consultants.component.html',
  styleUrls: ['./company-consultants.component.css']
})
export class CompanyConsultantsComponent implements OnInit {
  consultants: Consultant[] = [];
  viewMode = '';
  category = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private consultantService: ConsultantService
    ) {
      // TODOD: switchMap & .subscribe & applyFilter | see products.component.ts (organic-shop)
    this.consultants = this.consultantService.getConsultants();
    this.router.events.subscribe(() => {
      // console.log('id:', this.route.snapshot.paramMap.get('id'));
      // console.log('category:',  this.route.snapshot.queryParamMap.get('category'));
      this.category = this.route.snapshot.queryParamMap.get('category');
    });
  }

  ngOnInit() {
  }

  onViewChange(view: string) {
    console.log('view:', view);
    this.viewMode = view;
  }
}
