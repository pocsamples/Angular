import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CustomersRoutingModule
  ],
  providers: [
    CustomerService
  ]
})
export class CustomersModule { }
