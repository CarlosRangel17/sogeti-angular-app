import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatComponentsModule } from './modules/mat-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SliderItemDirective } from './components/slider/slider-item.directive';
import { SliderComponent } from './components/slider/slider.component';
import { AppTableComponent } from './components/app-table/app-table.component';
import { ConsultantService } from './services/consultant.service';
import { UpperTitleCasePipe } from './pipes/upper-title-case.pipe';
import { ZippyComponent } from './components/zippy/zippy.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IconPipe } from './pipes/icon-pipe';
import { ConsultantCardComponent } from './components/consultant-card/consultant-card.component';
import { CustomFormsModule } from 'ng2-validation';
import { MarketIconPipe } from './pipes/market-icon.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SliderComponent,
    SliderItemDirective,
    AppTableComponent,
    UpperTitleCasePipe,
    IconPipe,
    MarketIconPipe,
    ZippyComponent,
    ConsultantCardComponent
  ],
  imports: [
    CommonModule,
    MatComponentsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forChild([])
  ],
  exports: [
    CommonModule,
    MatComponentsModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    SliderComponent,
    SliderItemDirective,
    AppTableComponent,
    UpperTitleCasePipe,
    IconPipe,
    MarketIconPipe,
    ZippyComponent,
    ReactiveFormsModule,
    ConsultantCardComponent,
    FormsModule,
    CustomFormsModule
  ],
  providers: [
    ConsultantService
  ]
})
export class SharedModule { }
