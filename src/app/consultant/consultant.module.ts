import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ConsultantDashboardComponent } from './components/consultant-dashboard/consultant-dashboard.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [ConsultantDashboardComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'consultant/:section', component: ConsultantDashboardComponent },
      { 
        path: 'consultant',
        component: ConsultantDashboardComponent,
        data: {
          label: 'Consultant',
          icon: '<add icon info here>',
          sublinks: [
            'overview',
            'IBP',
            'CEC',
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
export class ConsultantModule { }
