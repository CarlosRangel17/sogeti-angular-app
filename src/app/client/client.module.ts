import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';

@NgModule({
  declarations: [ClientDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'client/:section', component: ClientDashboardComponent },
      { 
        path: 'client', 
        component: ClientDashboardComponent,
        data: {
          label: 'Client',
          icon: '<add icon info here>',
          sublinks: [
            'overview',
            'market',
            'consultants',
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
export class ClientModule { }
