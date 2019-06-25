import { Component, OnInit, Input } from '@angular/core';
import { Consultant, ModelType } from 'src/app/shared/models/consultant';
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
  @Input('id') id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private consultantService: ConsultantService
    ) {
      // TODOD: switchMap & .subscribe & applyFilter | see products.component.ts (organic-shop)
    this.consultantService.getDemoConsultants().subscribe(res => {
      // res => json response from blockchain 
      let tmpConsultant = new Consultant(ModelType.JSON, res);
      //TODO: Convert the returned blockchain records to consultant models 
      this.consultants.push(tmpConsultant); 
    });
    // this.router.events.subscribe(() => {
    //   console.log('id:', this.route.snapshot.paramMap.get('id'));
    //   this.id = this.route.snapshot.paramMap.get('id');
    // });
  }

  ngOnInit() {
    if (this.id) {
      // console.log('id:', this.id);
      this.viewMode = 'new';
    }
  }

  onViewChange(view: string) {
    // console.log('view:', view);
    this.viewMode = view;
  }
}
