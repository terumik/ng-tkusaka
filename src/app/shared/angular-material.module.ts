import { NgModule } from '@angular/core';
import {
  MatSidenavModule, MatListModule, MatDividerModule, MatButtonModule, MatGridListModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatGridListModule,


  ]
})

export class AngularMaterialModule {
}
