import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GenHomeComponent } from './gen-home/gen-home.component';
import { GenSignupComponent } from './gen-signup/gen-signup.component';

import { HttpClientModule } from '@angular/common/http';
import { GenXerComponent } from './gen-xer/gen-xer.component';




@NgModule({
  declarations: [
    AppComponent,
    GenHomeComponent,
    GenSignupComponent
    GenXerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
