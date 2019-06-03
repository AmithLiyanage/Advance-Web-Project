import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

//material
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MapComponent } from './map/map.component';

import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { Maps1Component } from './maps1/maps1.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MapComponent,
    Maps1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZVQiQ5HOprGADSF1kFH5GiOjlXDILuKo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
