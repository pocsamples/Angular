import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from '../services/customer.service';
import { HighlighterDirective } from './customer-list/highlighter.directive';

@NgModule({
  declarations: [
    CustomerListComponent,
    HighlighterDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomersRoutingModule
  ],
  providers: [
    CustomerService
  ]
})
export class CustomersModule { }
