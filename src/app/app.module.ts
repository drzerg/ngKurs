import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatListModule
} from '@angular/material';
import { WeatherComponent } from './weather/weather.component';
import { SocioComponent } from './socio/socio.component';
import { PhonePipe } from './phone.pipe';
import { CardresortComponent } from './cardresort/cardresort.component';
import { HwtwoComponent } from './hwtwo/hwtwo.component';
import { Routes, RouterModule}  from '@angular/router';
import { GithubServiceService } from './github-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes =[
  { path: '', component: AppComponent},
  { path: 'hwone', component: CardresortComponent},
  { path: 'hwtwo', component: HwtwoComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SocioComponent,
    PhonePipe,
    CardresortComponent,
    HwtwoComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule

  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
