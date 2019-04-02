/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './_modules/routing.module';
import { MatComponentsModule } from './_modules/mat-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Components */
import { AppComponent } from './app.component';
import { DashboardMenuBoxComponent } from './_components/dashboard-menu-box/dashboard-menu-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './_components/nav/nav.component';
import { NotFoundComponent } from './_components/not-found/not-found.component';
import { MarketComponent } from './_components/market/market.component';
import { ClientComponent } from './_components/client/client.component';
import { CompanyComponent } from './_components/company/company.component';
import { HomeComponent } from './_components/home/home.component';
import { RegulatorComponent } from './_components/regulator/regulator.component';
import { ConsultantComponent } from './_components/consultant/consultant.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppTableComponent } from './_components/app-table/app-table.component';
import { SliderComponent } from './_components/slider/slider.component';
import { SliderItemDirective } from './_components/slider/slider-item.directive';
import { MarketService } from './_services/market.service';
import { Utils } from './helpers/utils';
import { MarketCategoryPipe } from './helpers/market-category.pipe';
import { MarketImagePipe } from './helpers/market-image.pipe';
import { MarketFilterComponent } from './_components/market/market-filter/market-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardMenuBoxComponent,
    NavComponent,
    NotFoundComponent,
    MarketComponent,
    ClientComponent,
    CompanyComponent,
    HomeComponent,
    RegulatorComponent,
    ConsultantComponent,
    AppTableComponent,
    SliderComponent,
    SliderItemDirective,
    MarketCategoryPipe,
    MarketImagePipe,
    MarketFilterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    LayoutModule,
    FlexLayoutModule
  ],
  providers: [
    MarketService,
    Utils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
