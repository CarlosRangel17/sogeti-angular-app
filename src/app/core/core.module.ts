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

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMenuBoxComponent,
    HomeComponent,
    NavComponent,
    MarketCategoryPipe,
    MarketImagePipe,
    MarketFilterComponent,
    MarketComponent,
    NotFoundComponent
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
    MarketCategoryPipe,
    MarketImagePipe,
    MarketFilterComponent,
    MarketComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
