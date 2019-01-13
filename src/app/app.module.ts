import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './modules/routing.module';
import { AppComponent } from './app.component';
import { DashboardMenuBoxComponent } from './dashboard-menu-box/dashboard-menu-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponentsModule } from './modules/mat-components.module';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MarketComponent } from './market/market.component';
import { ClientComponent } from './client/client.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { RegulatorComponent } from './regulator/regulator.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { TopNavComponent } from './top-nav/top-nav.component';

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
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
