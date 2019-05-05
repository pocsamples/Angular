import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { StoreDevtools, StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: "ContactApp",
      maxAge: 25,
      logOnly: environment.production
    }),
    AppRoutingModule,
  ],
  providers: [
    // OrderService // If mentioned here, then OrderService is available for all child module, components of this AppModule.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
