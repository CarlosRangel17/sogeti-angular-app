import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CoreModule } from '../core/core.module';
import { CompanyConsultantsComponent } from './components/company-consultants/company-consultants.component';
import { ManageConsultantsComponent } from './components/company-consultants/manage-consultants/manage-consultants.component';
import { ConsultantFormComponent } from './components/consultant-form/consultant-form.component';

@NgModule({
  declarations: [
    CompanyDashboardComponent,
    CompanyConsultantsComponent,
    ConsultantFormComponent,
    ManageConsultantsComponent,
    ConsultantFormComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'company/:section/new', component: CompanyDashboardComponent },
      { path: 'company/:section/:id', component: CompanyDashboardComponent },
      { path: 'company/:section', component: CompanyDashboardComponent },
      {
        path: 'company',
        component: CompanyDashboardComponent,
        data: {
          label: 'Company',
          icon: '<add icon info here>',
          sublinks: [
            'overview',
            // 'CEC',
            // 'IBP',
            'market',
            'contracts',
            'consultants',
            'transaction-history'
          ]
        }
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CompanyModule { }
