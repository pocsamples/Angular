import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // OrderService // If mentioned here, then OrderService is available for all child module, components of this AppModule.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
