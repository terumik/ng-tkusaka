import { NgModule } from '@angular/core';
import {
  MatSidenavModule, MatListModule, MatDividerModule, MatButtonModule,
  MatGridListModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatSnackBarModule, MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ]
})

export class AngularMaterialModule {
}
