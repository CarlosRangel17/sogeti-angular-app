import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule
  ]
})
export class MatComponentsModule {

}
