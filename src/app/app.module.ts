import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { CompanyModule } from './company/company.module';
import { ConsultantModule } from './consultant/consultant.module';
import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { CoreModule } from './core/core.module';
import { Utils } from './shared/utilities/utils';
import { RegulatorModule } from './regulator/regulator.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CompanyModule,
    ClientModule,
    RegulatorModule,
    ConsultantModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent,
        // data: {
        //   label: 'Home',
        //   icon: '<add icon info here>'
        // }
      }, 
      { path: 'home', component: HomeComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    Utils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
