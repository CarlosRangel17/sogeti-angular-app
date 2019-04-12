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
import { UpperTitleCasePipe } from './pipes/upper-title-case.pipe';
import { ZippyComponent } from './components/zippy/zippy.component';

@NgModule({
  declarations: [
    SliderComponent,
    SliderItemDirective,
    AppTableComponent,
    UpperTitleCasePipe,
    ZippyComponent
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
    AppTableComponent,
    UpperTitleCasePipe,
    ZippyComponent
  ],
  providers: [
    MarketService
  ]
})
export class SharedModule { }
