import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../_components/not-found/not-found.component';
import { MarketComponent } from '../_components/market/market.component';
import { ClientComponent } from '../_components/client/client.component';
import { CompanyComponent } from '../_components/company/company.component';
import { HomeComponent } from '../_components/home/home.component';
import { RegulatorComponent } from '../_components/regulator/regulator.component';
import { ConsultantComponent } from '../_components/consultant/consultant.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      label: 'Home',
      icon: '<add icon info here>'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'regulator',
    component: RegulatorComponent,
    data: {
      label: 'Regulator',
      icon: '<add icon info here>'
    }
  },
  {
    path: 'market',
    component: MarketComponent,
  },
  {
    path: 'consultant',
    component: ConsultantComponent,
    data: {
      label: 'Consultant',
      icon: '<add icon info here>',
      sublinks: [
        'dashboard'
      ]
    }
  },
  {
    path: 'client',
    component: ClientComponent,
    data: {
      label: 'Client',
      icon: '<add icon info here>',
      sublinks: [
        'market',
        'dashboard'
      ]
    }
  },
  {
    path: 'company',
    component: CompanyComponent,
    data: {
      label: 'Company',
      icon: '<add icon info here>',
      sublinks: [
        'market',
        'dashboard'
      ]
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
