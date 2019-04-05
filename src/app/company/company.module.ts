import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [CompanyDashboardComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'company/:section', component: CompanyDashboardComponent },
      { 
        path: 'company', 
        component: CompanyDashboardComponent,
        data: {
          label: 'Company',
          icon: '<add icon info here>',
          sublinks: [
            'overview',
            'CEC',
            'IBP',
            'market',
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
