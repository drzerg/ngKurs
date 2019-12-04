import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetserviceComponent } from './getservice/getservice.component';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatListModule
} from '@angular/material';
import { HwtwoComponent } from './hwtwo.component';


@NgModule({
  declarations: [GetserviceComponent, HwtwoComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule
  ]
})
export class HwtwoModule { }
