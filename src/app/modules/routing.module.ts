import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { MarketComponent } from '../market/market.component';
import { ClientComponent } from '../client/client.component';
import { CompanyComponent } from '../company/company.component';
import { HomeComponent } from '../home/home.component';
import { RegulatorComponent } from '../regulator/regulator.component';
import { ConsultantComponent } from '../consultant/consultant.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    data: {
      label: 'Home'
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
      label: 'Regulator'
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
      label: 'Consultant'
    } 
  },
  { 
    path: 'client',
    component: ClientComponent,
    data: {
      label: 'Client'
    } 
  },
  { 
    path: 'company',
    component: CompanyComponent,
    data: {
      label: 'Company'
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
