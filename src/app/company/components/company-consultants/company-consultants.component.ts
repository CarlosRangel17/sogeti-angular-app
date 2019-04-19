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
  filteredConsultants: Consultant[] = [];
  consultants: Consultant[] = [];
  viewMode = '';
  category = 'All';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private consultantService: ConsultantService
    ) {
      // TODOD: switchMap & .subscribe & applyFilter | see products.component.ts (organic-shop)
    this.consultants = this.filteredConsultants = this.consultantService.getConsultants();
    this.router.events.subscribe(() => {
      // console.log('id:', this.route.snapshot.paramMap.get('id'));
      this.category = this.route.snapshot.queryParamMap.get('category');
      // console.log('category:', this.category);
      this.applyFilter();
    });
  }

  ngOnInit() {
  }

  private applyFilter() {
    console.log('apply:', this.category);
    switch (this.category) {
      case 'Pending':
        this.filteredConsultants = this.consultants.filter(consultant => consultant.ClientId);
        break;
      case 'FTE':
        this.filteredConsultants = this.consultants.filter(consultant => consultant.ClientId);
        break;
      case 'ATO':
        this.filteredConsultants = this.consultants.filter(consultant => !consultant.ClientId);
        break;
      default:
        this.filteredConsultants = this.consultants;
    }
    console.log(this.filteredConsultants);
  }

  onViewChange(view: string) {
    console.log('view:', view);
    this.viewMode = view;
  }
}
