import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RegulatorDashboardComponent } from './components/regulator-dashboard/regulator-dashboard.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [RegulatorDashboardComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'regulator/:section', component: RegulatorDashboardComponent },
      {
        path: 'regulator',
        component: RegulatorDashboardComponent,
        data: {
          label: 'Regulator',
          icon: '<add icon info here>',
          sublinks: [
            'overview',
            'counselees',
            'IBP',
            'CEC',
            'transaction-history'
          ]
        }
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RegulatorModule { }
