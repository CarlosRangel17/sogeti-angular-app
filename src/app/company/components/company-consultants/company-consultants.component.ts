import { Component, OnInit, Input } from '@angular/core';
import { Consultant, ModelType } from 'src/app/shared/models/consultant';
import { ConsultantService } from 'src/app/shared/services/consultant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultantAssetchain } from 'src/app/shared/models/consultant-assetchain';

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
      this.consultantService.getConsultants().subscribe(res => {

        console.log('*** BEGIN ITERATING OVER BLOCKCHAIN ASSETS ***');

        // Format assets here
        res.forEach((asset:ConsultantAssetchain) => this.consultants.push(new Consultant(ModelType.JSON, asset))); 
        // End formatting assets

        console.log(this.consultants);

        console.log("*** END ITERATION ***");
      });

      console.log(this.consultants);

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
