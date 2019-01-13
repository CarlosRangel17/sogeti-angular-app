/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './_modules/routing.module';
import { MatComponentsModule } from './_modules/mat-components.module';

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
import { TopNavComponent } from './_components/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardMenuBoxComponent,
    NavComponent,
    TopNavComponent,
    NotFoundComponent,
    MarketComponent,
    ClientComponent,
    CompanyComponent,
    HomeComponent,
    RegulatorComponent,
    ConsultantComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
