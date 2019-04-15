import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarketCategoryPipe } from './components/market/market-category.pipe';
import { MarketImagePipe } from './components/market/market-image.pipe';
import { SharedModule } from '../shared/shared.module';
import { DashboardMenuBoxComponent } from './components/dashboard/dashboard-menu-box/dashboard-menu-box.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { MarketFilterComponent } from './components/market/market-filter/market-filter.component';
import { MarketComponent } from './components/market/market.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RolePipe } from './pipes/role-pipe';
import { DashboardContentComponent } from './components/dashboard/dashboard-content/dashboard-content.component';
import { DashboardJumbotronComponent } from './components/dashboard/dashboard-jumbotron/dashboard-jumbotron.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMenuBoxComponent,
    HomeComponent,
    NavComponent,
    RolePipe,
    MarketCategoryPipe,
    MarketImagePipe,
    MarketFilterComponent,
    MarketComponent,
    NotFoundComponent,
    DashboardContentComponent,
    DashboardJumbotronComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  exports: [
    DashboardComponent,
    DashboardMenuBoxComponent,
    HomeComponent,
    NavComponent,
    RouterModule,
    RolePipe,
    MarketCategoryPipe,
    MarketImagePipe,
    MarketFilterComponent,
    MarketComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
