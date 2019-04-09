import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatComponentsModule } from './modules/mat-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SliderItemDirective } from './components/slider/slider-item.directive';
import { SliderComponent } from './components/slider/slider.component';
import { AppTableComponent } from './components/app-table/app-table.component';
import { MarketService } from './services/market.service';

@NgModule({
  declarations: [
    SliderComponent,
    SliderItemDirective,
    AppTableComponent

  ],
  imports: [
    CommonModule,
    MatComponentsModule,
  ],
  exports: [
    CommonModule,
    MatComponentsModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    SliderComponent,
    SliderItemDirective,
    AppTableComponent
  ],
  providers: [
    MarketService
  ]
})
export class SharedModule { }