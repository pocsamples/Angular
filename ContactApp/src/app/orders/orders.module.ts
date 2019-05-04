import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderService } from '../services/order.service';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers: [
    // OrderService // not required, as parent module AppModule has OrderService in providers array.
  ]
})
export class OrdersModule { }
