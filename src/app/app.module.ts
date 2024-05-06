import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './auth/pages/login/login.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],

  exports:[
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
